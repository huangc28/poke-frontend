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
      "@babel/preset-env"
    ],
    "@babel/preset-react"
  ]

  const plugins = [
    [
      "@babel/transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]

  return {
    env,
    presets,
    plugins,
  }
}
