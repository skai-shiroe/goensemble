#!/usr/bin/env bash
# Lance Metro (serveur de dev Expo) pour l'APK de developpement installe sur le
# telephone, en mettant a jour automatiquement EXPO_PUBLIC_API_URL avec l'IP LAN
# courante du PC, et en choisissant un port Metro libre.
#
# Pourquoi : le telephone ne peut joindre le PC que par son IP Wi-Fi, qui change
# a chaque reseau ; et sur cette machine les ports 8080-8082 sont deja pris par
# des services locaux. Ce script s'adapte a chaque lancement -> plus aucune
# edition manuelle de apps/mobile/.env ni de l'URL a ouvrir dans l'app.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT/apps/mobile/.env"
PREFERRED_PORT="${METRO_PORT:-8081}"

# 1) IP LAN du PC : premiere IPv4 non-loopback.
IP="$(hostname -I 2>/dev/null | tr ' ' '\n' | grep -E '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$' | grep -v '^127\.' | head -1 || true)"
if [[ -z "${IP}" ]]; then
  IP="$(ip -4 route get 1.1.1.1 2>/dev/null | grep -oE 'src [0-9.]+' | awk '{print $2}' | head -1 || true)"
fi
if [[ -z "${IP}" ]]; then
  echo "ERREUR : impossible de detecter l'adresse IP locale du PC." >&2
  echo "         Verifie la connexion reseau, puis relance 'bun mobile'." >&2
  exit 1
fi

API_URL="http://${IP}:3000"

# 2) Mise a jour de apps/mobile/.env seulement si l'IP a change (les autres
#    variables eventuelles sont conservees).
CURRENT="$(grep -E '^EXPO_PUBLIC_API_URL=' "$ENV_FILE" 2>/dev/null | tail -1 | cut -d= -f2- || true)"
if [[ "${CURRENT}" == "${API_URL}" ]]; then
  echo "IP inchangee  : ${IP}"
else
  {
    echo "EXPO_PUBLIC_API_URL=${API_URL}"
    grep -vE '^EXPO_PUBLIC_API_URL=' "$ENV_FILE" 2>/dev/null || true
  } > "${ENV_FILE}.tmp"
  mv "${ENV_FILE}.tmp" "$ENV_FILE"
  echo "IP mise a jour : ${CURRENT:-<absente>} -> ${API_URL}"
fi

# 3) Premier port TCP libre (8080-8082 sont occupes par des services locaux).
port_free() { ! ss -tln 2>/dev/null | awk '{print $4}' | grep -qE "[:.]$1\$"; }
PORT=""
for p in $(seq "$PREFERRED_PORT" $((PREFERRED_PORT + 30))); do
  if port_free "$p"; then PORT="$p"; break; fi
done
if [[ -z "${PORT}" ]]; then
  echo "ERREUR : aucun port libre entre ${PREFERRED_PORT} et $((PREFERRED_PORT + 30))." >&2
  exit 1
fi
if [[ "${PORT}" != "${PREFERRED_PORT}" ]]; then
  echo "Ports ${PREFERRED_PORT}-$((PORT - 1)) occupes -> Metro sur le port ${PORT}"
fi

echo ""
echo "API   : ${API_URL}   (lance 'bun api' en parallele si ce n'est pas deja fait)"
echo "Metro : exp://${IP}:${PORT}   <- a ouvrir dans l'app GO Ensemble (dev build)"
echo ""

# 4) Metro / Expo (--host lan : joignable depuis le telephone sur le meme Wi-Fi).
cd "$ROOT"
METRO_FILE_MAP_WATCHER_MAX_WAIT_TIME=600000 exec bun --cwd apps/mobile start --host lan --port "${PORT}"
