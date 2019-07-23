import React from 'react'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => {
  return (
    <div>
      { renderRoutes(route.routes) }

      <div id='modal-body'></div>
    </div>
  )
}

export default App