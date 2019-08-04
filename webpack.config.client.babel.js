import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import { client } from 'universal-webpack/config'

import settings from './universal-webpack-settings'
import webpackConfigFunc from './webpack.config'

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === 'development'
const ifDev = plugin => isDev && plugin || null

const removeEmpty = plugins => plugins.filter(p => !!p)

const webpackConfig = webpackConfigFunc()

// @ref: A good tutorial reference of split chunk plugin
// https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
const optimization = {
  runtimeChunk: {
    name: "manifest",
  },
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'initial',
        priority: 1,
      }
    },
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

  new BundleAnalyzerPlugin(),

  new TerserPlugin({
    terserOptions: {
      warnings: true,
    }
  }),

  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
  })
])

webpackConfig.optimization = optimization
webpackConfig.plugins = webpackConfig.plugins.concat(plugins)

// Create client-side Webpack config.
export default client(webpackConfig, settings)