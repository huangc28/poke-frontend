import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackIsomorphicClientConfig from '../webpack.config.client.babel'

const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT || 3006;
const app = express();
const compiler = webpack(webpackIsomorphicClientConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  historyApiFallback: true,
  publicPath: webpackIsomorphicClientConfig.output.publicPath,
  stats: {
    colors: true,
  },
  headers: {
    // @issue webpack-dev-middleware note on v1.10.2
    // https://github.com/webpack/webpack-dev-middleware/releases
    'Access-Control-Allow-Origin': '*',
  },
}));

app.use(webpackHotMiddleware(compiler, { // eslint-disable-line global-require
  log: console.log, // eslint-disable-line no-console
  heartbeat: 10 * 1000,
}));

app.listen(DEV_SERVER_PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', DEV_SERVER_PORT);
  }
});
