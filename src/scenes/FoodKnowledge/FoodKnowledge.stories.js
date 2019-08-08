import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import FoodKnowledge from './FoodKnowledge'

storiesOf('Food Knowledge', module)
  .add('Food Knowledge', () => {
    return (
      <Router>
        <FoodKnowledge />
      </Router>
    )
  })
