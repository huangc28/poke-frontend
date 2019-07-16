import React from 'react'
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      hello app
    </div>
  )
}

// console.log('ISOMORPHIC_WEBPACK', ISOMORPHIC_WEBPACK)
// console.log('process', process)
// console.log('!!!!~~~~', ISOMORPHIC_WEBPACK)

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