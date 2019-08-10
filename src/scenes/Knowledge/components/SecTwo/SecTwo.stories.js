import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import SecTwo from './SecTwo'

storiesOf('Knowledge', module)
  .add('Section Two', () => (
    <Router>
      <SecTwo
        article={{
          img: 'https://via.placeholder.com/600x420',
          title: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
          visit: 10,
          updated_at: 'just now'
        }}
      />
    </Router>
  ))