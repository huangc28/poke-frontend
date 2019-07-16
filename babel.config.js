module.exports = function (api) {
  api.cache(true)

  const presets = [

    [
      "@babel/preset-env"
      //{
        //"modules": false
      //}
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
    presets,
    plugins,
  }
}
