module.exports = function () {
  // @todo we applied treeshaking when building frontend bundle by disabling
  // babel to transpile . However, we still need babel to transpile es6 module
  // on the server side.
  const config = {
    presets: [
      ["@babel/preset-react"],
      [
        '@babel/preset-env',
        {
          'targets': {
            'node': 'current'
          },
          'modules': 'auto'
        }
      ]
    ]
  }

  require('@babel/register')(config)
}
