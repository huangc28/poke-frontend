const path = require('path')

module.exports = function (api) {
  api.cache(true)
  const env = {
    'development': {
      'plugins': [
        [
            'babel-plugin-styled-components',
            { 'ssr': true, 'displayName': true, 'preprocess': false },
        ],
      ],
    },
    'production': {
      'plugins': [
        [
            'babel-plugin-styled-components',
            { 'ssr': true, 'displayName': true, 'preprocess': false },
        ],
      ],
    },
  }

  const presets = [
    [
      "@babel/preset-env",
    ],
    "@babel/preset-react"
  ]

  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [path.resolve(__dirname, './src')],
        alias: {
          '@poke': path.resolve(__dirname, './src'),
        }
      }
    ],
    [
      "@babel/transform-runtime",
      {
        "regenerator": true
      }
    ],
  ]

  return {
    env,
    presets,
    plugins,
  }
}
