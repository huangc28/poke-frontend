import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import { client } from 'universal-webpack/config'

import settings from './universal-webpack-settings'
import webpackConfigFunc from './webpack.config'

const isDev = process.env.NODE_ENV === 'development'
const ifDev = plugin => isDev && plugin || null

const removeEmpty = plugins => plugins.filter(p => !!p)

const webpackConfig = webpackConfigFunc()

const optimization = {
  runtimeChunk: {
    name: "manifest",
  },
}

const plugins = removeEmpty([
  ifDev(new webpack.HotModuleReplacementPlugin({
    multiStep: true,
  })),

  ifDev(new webpack.NoEmitOnErrorsPlugin()),

  new CleanWebpackPlugin({
    verbose: true,
    cleanOnceBeforeBuildPatterns: ['dist', '!server*']
  }),
])

webpackConfig.optimization = optimization
webpackConfig.plugins = webpackConfig.plugins.concat(plugins)

// Create client-side Webpack config.
export default client(webpackConfig, settings)