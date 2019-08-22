import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import FoodKnowledge from './FoodKnowledge'

storiesOf('scenes', module)
  .add('Food Knowledge', () => {
    return (
      <Router>
        <FoodKnowledge />
      </Router>
    )
  })
