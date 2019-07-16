import React from 'react'
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      hello app bryan huang
    </div>
  )
}

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