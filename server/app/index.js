import path from 'path'
import express from 'express'
import { rendertoString } from 'react-dom/server'

import renderFullPage from '../util/render'
// import { myapp } from '../../src/index'

const app = express()

const handleRender = function (req, res, next) {
  res.send(renderFullPage(''))
}

app
  .use('/', express.static(path.resolve(__dirname, '../../dist')))
  .use('/static', express.static(path.resolve(__dirname, '../../static')))

app.get(/^((?!\.svg|\.png|\.jpe?g|\.json|\.ico).)*$/, handleRender);

export default app