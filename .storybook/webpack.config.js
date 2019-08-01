const path = require('path')

module.exports = async ({ config }) => {
  const alias = {
    '@poke/components': path.resolve(__dirname, '../src/components'),
    '@poke/util': path.resolve(__dirname, '../src/util'),
    '@poke/styles': path.resolve(__dirname, '../src/styles')
  }

  config.resolve.alias = Object.assign({}, config.resolve.alias, alias)

  return config
}