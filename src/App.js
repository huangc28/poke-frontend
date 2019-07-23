import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Reset } from 'styled-reset'

const App = ({ route }) => {
  return (
    <React.Fragment>
      <Reset />
      { renderRoutes(route.routes) }
    </React.Fragment>
  )
}

export default App