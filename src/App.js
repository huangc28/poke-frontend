import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { renderRoutes } from 'react-router-config'

import MSJH from '@poke/styles/font-themes/msjh_0.woff2'
import $ from "jquery";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'PokeFont';
    src: url(${MSJH}) format('woff2');
  }

  body {
    font-family: Microsoft JhengHei, Fallback, sans-serif;
    padding: 0px;
    margin: 0px;
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

  #app {
    margin: 0px;
    padding: 0px;
  }
`

const App = ({ route }) => (
  <React.Fragment>
    <GlobalStyle />
    { renderRoutes(route.routes) }
  </React.Fragment>
)

export default App