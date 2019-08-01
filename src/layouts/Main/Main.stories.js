import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import Main from './Main'

storiesOf('Layouts', module)
  .add('Main layout', () => {
    return (
      <Router>
        <Main>
          <div>
            div one
          </div>
          <div>
            div two
          </div>
        </Main>
      </Router>
    )
  })