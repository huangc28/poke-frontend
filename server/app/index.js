import path from 'path'
import React from 'react'
import express from 'express'
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { renderToStaticMarkup } from 'react-dom/server'

import renderFullPage from '../util/render'
import routes from '../../src/routes'

const app = express()
const sheet = new ServerStyleSheet()

const getApp = bundleInfo => {
  const handleRender = (req, res, next) => {
    try {
      const context = {}
      let html = ''
      html = renderToStaticMarkup(
        <StyleSheetManager sheet={sheet.instance}>
          <StaticRouter
            location={req.url}
            context={context}
          >
            { renderRoutes(routes) }
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
    
      res.send(renderFullPage({ html, styleTags, bundleInfo }))
    } catch (err) {
      next(err)
    } finally {
      sheet.seal()
    }
  }
  
  app
    .use('/', express.static(path.resolve(__dirname, '../../dist')))
    .use('/static', express.static(path.resolve(__dirname, '../../static')))
  
  app.get(/^((?!\.svg|\.png|\.jpe?g|\.json|\.ico).)*$/, handleRender);

  return app
}


export default getApp