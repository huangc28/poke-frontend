import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import SecTwo from './SecTwo'

storiesOf('Knowledge', module)
  .add('Section Two', () => (
    <Router>
      <SecTwo />
    </Router>
  ))