import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import Header from './Header'

storiesOf('Header', module)
  .add('Page Header', () => (
    <Router>
      <Header />
    </Router>
  ))
