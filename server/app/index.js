import path from 'path'
import React from 'react'
import express from 'express'
import proxy from 'express-http-proxy'
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { renderToStaticMarkup } from 'react-dom/server'

import routes from '../../src/routes'
import ProviderWithRouter from '../../src/ProviderWithRouter'
import configureStore from '../../src/store/configureStore'
import rootReducer from '../../src/services/redux'
import renderFullPage from '../util/render'
import config from '@poke/config'

const app = express()
const sheet = new ServerStyleSheet()

const getApp = bundleInfo => {
  const handleRender = (req, res, next) => {
    try {
      const preloadedState = {}
      const store = configureStore(rootReducer, preloadedState)

      const context = {}
      let html = ''
      html = renderToStaticMarkup(
        <StyleSheetManager sheet={sheet.instance}>
          <StaticRouter
            location={req.url}
            context={context}
          >
            <ProviderWithRouter store={store}>
              { renderRoutes(routes) }
            </ProviderWithRouter>
          </StaticRouter>
        </StyleSheetManager>
      )

      const styleTags = sheet.getStyleTags()

      if (context.status === 404) {
        res.status(404)
      }

      if (context.status === 302) {
        const { status, url } = context

        res.redirect(status, url)
      }

    res.send(renderFullPage({ html, preloadedState, styleTags, bundleInfo }))
    } catch (err) {
      next(err)
    } finally {
      sheet.seal()
    }
  }
  
  app
    .use('/', express.static(path.resolve(__dirname, '../../dist')))
    .use('/static', express.static(path.resolve(__dirname, '../../static')))
    .use('/api/v1', proxy(config.POKE_ENDPOINT))
  
  app.get(/^((?!\.svg|\.png|\.jpe?g|\.json|\.ico).)*$/, handleRender);

  return app
}


export default getApp