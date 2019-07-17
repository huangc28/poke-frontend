import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './Header'

storiesOf('Header', module)
  .add('Page Header', () => (
    <Header />
  ))
  .add('Image place holder', () => {
    <img
      src='http://via.placeholder.com/80x35'
    />
  })
