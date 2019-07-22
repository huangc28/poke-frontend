const path = require('path')

module.exports = async ({ config }) => {
  const alias = {
    '@poke/components': path.resolve(__dirname, '../src/components'),
  }

  config.resolve.alias = Object.assign({}, config.resolve.alias, alias)

  return config
}