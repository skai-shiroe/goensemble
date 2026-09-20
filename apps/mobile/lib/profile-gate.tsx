import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Session } from '@supabase/supabase-js';
import { api } from '@/lib/api';

/**
 * Garde « profil complet » : le téléphone est la clé de confiance du produit
 * (il n'est révélé qu'après une réservation acceptée). Tant que l'utilisateur
 * n'a pas renseigné un vrai numéro, l'app l'oriente vers l'écran d'onboarding
 * (`app/profil-setup.tsx`) au lieu des onglets.
 *
 * L'état vient de `GET /users/me` → `profileComplete` (calculé côté API :
 * le placeholder interne `pending:<id>` n'est pas un vrai numéro).
 */
type ProfileGateValue = {
  /** true tant que l'état du profil n'est pas connu (évite un écran qui clignote). */
  loading: boolean;
  /** true si le profil est complet (téléphone renseigné). */
  complete: boolean;
  /** Recharge l'état — appelé après l'onboarding ou depuis le profil. */
  refresh: () => Promise<void>;
};

const ProfileGateContext = createContext<ProfileGateValue>({
  loading: false,
  complete: true,
  refresh: async () => {},
});

export function ProfileGateProvider({
  session,
  children,
}: {
  session: Session | null;
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(Boolean(session));
  const [complete, setComplete] = useState(true);

  const refresh = useCallback(async () => {
    if (!session) {
      // Pas de session : le garde de session (Stack.Protected) fait le reste.
      setComplete(true);
      setLoading(false);
      return;
    }
    try {
      const me = await api.getMe();
      setComplete(me.profileComplete !== false);
    } catch (e) {
      // API injoignable : on ne bloque pas l'utilisateur sur l'onboarding (il ne
      // pourrait pas enregistrer son numéro). Les écrans affichent leurs propres
      // erreurs avec un bouton « Réessayer ».
      if (__DEV__) console.warn('[profile-gate] getMe échoué:', (e as Error).message);
      setComplete(true);
    } finally {
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    setLoading(Boolean(session));
    refresh();
  }, [refresh, session]);

  const value = useMemo(() => ({ loading, complete, refresh }), [loading, complete, refresh]);

  return <ProfileGateContext.Provider value={value}>{children}</ProfileGateContext.Provider>;
}

export function useProfileGate() {
  return useContext(ProfileGateContext);
}
