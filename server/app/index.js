import path from 'path'
import React from 'react'
import express from 'express'
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { renderToStaticMarkup } from 'react-dom/server'

import renderFullPage from '../util/render'
import routes from '../../src/routes'

const app = express()

const handleRender = function (req, res, next) {
  const context = {}
  let html = ''
  html = renderToStaticMarkup(
    <StaticRouter
      location={req.url}
      context={context}
    >
      { renderRoutes(routes) }
    </StaticRouter>
  )

  console.log('BRYAN DEBUG 1 html', html)

  if (context.status === 404) {
    res.status(404)
  }

  if (context.status === 302) {
    const { status, url } = context

    res.redirect(status, url)
  }

  res.send(renderFullPage(''))
}

app
  .use('/', express.static(path.resolve(__dirname, '../../dist')))
  .use('/static', express.static(path.resolve(__dirname, '../../static')))

app.get(/^((?!\.svg|\.png|\.jpe?g|\.json|\.ico).)*$/, handleRender);

export default app