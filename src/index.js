import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes'

import App from './App'

const renderApp = () => (
  ReactDOM.render(
    <BrowserRouter>
      {
        renderRoutes(routes)
      }
    </BrowserRouter>,
    document.getElementById('app')
  )
)

if (module.hot) {
  module.hot.accept()
  renderApp()
}

renderApp()

export default App