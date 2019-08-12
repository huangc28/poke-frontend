/* global __CLIENT__ */

let clientConfig
if (__CLIENT__) {
  clientConfig = window.__CONFIG__
} else {
  clientConfig = require('../../server/config')
}

export default clientConfig