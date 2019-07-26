import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { renderRoutes } from 'react-router-config'
import reset from 'styled-reset'

import MSJH from '@poke/styles/font-themes/msjh_0.woff2'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'PokeFont';
    src: url(${MSJH}) format('woff2');
  }

  body {
    font-family: 'PokeFont', Fallback, sans-serif;
  }

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.3em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.8em;
  }
  h6 {
    font-size: 0.7em;
  }
`

const App = ({ route }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      { renderRoutes(route.routes) }
    </React.Fragment>
  )
}

export default App