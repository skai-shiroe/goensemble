const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Surveille uniquement le mobile + les packages partages
config.watchFolders = [projectRoot, path.resolve(monorepoRoot, 'packages')];

// node_modules : local + racine monorepo (layout isole Bun)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Exclut les dossiers non lies au mobile du graphe
config.resolver.blockList = [
  new RegExp(path.resolve(monorepoRoot, 'apps/api').replace(/\\/g, '/') + '/.*'),
  new RegExp(path.resolve(monorepoRoot, 'packages/database').replace(/\\/g, '/') + '/.*'),
];

// Windows + Defender : le premier crawl est lent.
// Le delai est pilote par la variable d'environnement
// METRO_FILE_MAP_WATCHER_MAX_WAIT_TIME (definie dans le script bun mobile).

module.exports = config;