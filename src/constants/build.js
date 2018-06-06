const packageJson = require('../../package.json');

export const BUILD_ENV = process.env.NODE_ENV;
export const BUILD_VERSION = packageJson.version;
