
const path = require('path')

require('./server-hooks')()
require(path.resolve(__dirname, '../webpack/webpack-dev-server'))