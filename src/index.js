import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes'
import App from './App'
import ProviderWithRouter from './ProviderWithRouter'
import rootReducer from './services/redux'

const renderApp = () => (
  ReactDOM.render(
    <BrowserRouter>
      <ProviderWithRouter
        initialState={window.__PRELOADED_STATE__}
        rootReducer={rootReducer}
      >
        {
          renderRoutes(routes)
        }
      </ProviderWithRouter>
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