import webpack from 'webpack'
import { server } from 'universal-webpack/config'
import CleanWebpackPlugin from 'clean-webpack-plugin'

import settings from './universal-webpack-settings'
import webpackConfigFunc from './webpack.config'

const webpackConfig = webpackConfigFunc()

// The context of "webpack.config.js" is set to "kikibuy-frontend/src".
// However, server/index.js can not be found in that context for server
// side script. Therefore, in order for universal webpack to find
// proper entry on the server side, we have to set the context
// to the project root directory so that uuniversal webpack is able
// to find server side entry point via "poke-frontend/server/index.js"
// but not "poke-frontend/src/server/index.js".
webpackConfig.context = __dirname

const plugins = [
  new webpack.DefinePlugin({
    __CLIENT__: false,
    __SERVER__: true
  }),

  new CleanWebpackPlugin({
    verbose: true,
    cleanOnceBeforeBuildPatterns: ['dist/server/*']
  }),
]

webpackConfig.plugins = webpackConfig.plugins.concat(plugins)

// Create server-side Webpack config.
export default server(webpackConfig, settings)