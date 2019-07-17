import React from 'react'
import ReactDOM from 'react-dom';

import App from './containers/App'

const renderApp = () => (
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
)

if (module.hot) {
  module.hot.accept()
  renderApp()
}

renderApp()

export default App