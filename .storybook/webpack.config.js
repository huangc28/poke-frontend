const path = require('path')
const webpack = require('webpack')

module.exports = async ({ config }) => {
  const alias = {
    '@poke/components': path.resolve(__dirname, '../src/components'),
    '@poke/util': path.resolve(__dirname, '../src/util'),
    '@poke/styles': path.resolve(__dirname, '../src/styles'),
    '@poke/layouts': path.resolve(__dirname, '../src/layouts'),
    '@poke/constants': path.resolve(__dirname, '../src/constants'),
  }

  config.resolve.alias = Object.assign({}, config.resolve.alias, alias)


  const plugins = [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false
    })
  ]

  config.plugins = config.plugins.concat(plugins)

  return config
}