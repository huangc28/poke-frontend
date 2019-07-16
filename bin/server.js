// If environment is development, we require server hooks
// to transpile JS with babel.
const path = require('path')
const startServer = require('universal-webpack/server')

const settings = require('../universal-webpack-settings.json')
const webpackConfFunc = require('../webpack.config')

const webpackConf = webpackConfFunc({ development: true })

webpackConf.context = path.resolve(__dirname, '../')

if (process.env.NODE_ENV === 'development') {
  require('./server-hooks')()
}

global.SERVER = true
global.CLIENT = false

startServer(webpackConf, settings)
// require('../server')

