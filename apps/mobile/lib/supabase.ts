import 'react-native-url-polyfill/auto';
import { AppState, Platform } from 'react-native';
import { createClient } from '@supabase/supabase-js';

type AuthStorage = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

// expo-secure-store ne supporte plus le web (SDK 57) :
// natif -> SecureStore, web -> localStorage (dev uniquement).
declare const require: (mod: string) => any;

function resolveStorage(): AuthStorage {
  if (Platform.OS === 'web') {
    // Rendu statique (SSR Node) : localStorage absent -> stockage memoire.
    const mem = new Map<string, string>();
    const hasLocalStorage = typeof globalThis.localStorage !== 'undefined';
    return {
      getItem: (key) => Promise.resolve(hasLocalStorage ? globalThis.localStorage.getItem(key) : mem.get(key) ?? null),
      setItem: (key, value) => {
        if (hasLocalStorage) globalThis.localStorage.setItem(key, value);
        else mem.set(key, value);
        return Promise.resolve();
      },
      removeItem: (key) => {
        if (hasLocalStorage) globalThis.localStorage.removeItem(key);
        else mem.delete(key);
        return Promise.resolve();
      },
    };
  }
  const SecureStore = require('expo-secure-store');
  return {
    getItem: (key: string) => SecureStore.getItemAsync(key),
    setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
    removeItem: (key: string) => SecureStore.deleteItemAsync(key),
  };
}

// Cles publiques (anon) — pas un secret
const SUPABASE_URL = 'https://tcktklugfleairjrswgq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRja3RrbHVnZmxlYWlyanJzd2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMDY1MjUsImV4cCI6MjEwNDc4MjUyNX0.kCPoLys0OT_y0zCCaMNtHE45IfVTIDr7Mz7g-TkxqQg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: resolveStorage(),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// React Native : le refresh automatique doit etre coupe quand l'app passe en
// arriere-plan (ex. ouverture du navigateur OAuth) et relance au retour.
// Recommandation officielle Supabase pour React Native.
if (Platform.OS !== 'web') {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') supabase.auth.startAutoRefresh();
    else supabase.auth.stopAutoRefresh();
  });
}

// Deep link de retour OAuth (scheme declare dans app.json)
export const AUTH_REDIRECT_URL = 'goensemble://auth-callback';