import { client } from 'universal-webpack/config'

import settings from './universal-webpack-settings'
import webpackConfigFunc from './webpack.config'

const webpackEnv = process.env.NODE_ENV === 'development'
  ? { development: true }
  : { production: true }

const webpackConfig = webpackConfigFunc(webpackEnv)

// Create client-side Webpack config.
export default client(webpackConfig, settings)