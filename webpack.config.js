const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, './.env')
})

module.exports = (env, argv) => {
  const isProd = process.env.NODE_ENV === 'production'
  const isDev = process.env.NODE_ENV === 'development'

  const ifDev = plugin => isDev && plugin || null
  const ifProd = plugin => isProd && plugin || null

  const removeEmpty = plugins => (plugins.filter(i => !!i))

  const PUBLIC_PATH = isDev ? `http://localhost:${dotenv.parsed.DEV_SERVER_PORT}/` : '/';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map': 'eval',
    context: path.resolve(__dirname, 'src'),
    entry: removeEmpty([
      path.resolve(__dirname, 'src/index.js'),
      ifDev(`webpack-hot-middleware/client?path=http://localhost:${dotenv.parsed.DEV_SERVER_PORT}/__webpack_hmr&timeout=20000`),
    ]),
    module: {
      rules: removeEmpty([
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        ifDev({
          test: /\.(scss|css)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true, // enable css module
                importLoaders: 2,
                localIdentName: '[name]__[local]__[hash:base64:5]',
                exportOnlyLocals: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
        ifProd({
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                module: true, // enable css module
                importLoaders: 2,
                localIdentName: '_[hash:base64:5]',
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          use: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
          ],
        },
        {
          test: /\.svg$/,
          loader: 'file-loader?name=[hash].[ext]',
        },
        {
          test: /\.woff(\?\.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'application/font-woff',
            name: '[hash].[ext]',
          },
        },
        {
          test: /\.woff2(\?\.*)?$/,
          loader: 'file-loader',
          options: {
            limit: 50000,
            mimetype: 'application/font-woff2',
            name: '[hash].[ext]',
            publicPath: PUBLIC_PATH,
          },
        },
        {
          test: /\.ttf$|\.eot$/,
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
          },
        },
      ])
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: PUBLIC_PATH, // @todo publicPath might change due to webpackHotReplacement
      // @todo If we use webpack isomorphic tool, then we can enable this. We need to
      // let node to know which bundle to load. We can achieve this only by using webpack
      // isomorphic-tool
      filename: isProd ? '[name].[chunkhash].js' : '[name].js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
    ],
  }
}