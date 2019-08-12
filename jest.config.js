const path = require('path')

module.exports = {
  'globals': {
    '__CLIENT__': false,
    '__SERVER__': false
  },
  'collectCoverage': true,
  'collectCoverageFrom': [ path.resolve(__dirname, 'src')],
  'verbose': true,
  setupFiles: ['dotenv/config'],
  'moduleNameMapper': {
    '^@poke/config(.*)$': '<rootDir>/src/config',
    '^@poke/services/apis/util(.*)$': '<rootDir>/src/services/apis/util'
  }
}
