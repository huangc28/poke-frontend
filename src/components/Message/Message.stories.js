import React from 'react'
import { storiesOf } from '@storybook/react'

import Message from './Message'

storiesOf('Message', module)
  .add('Message', () => {
    return (
      <Message/>
    )
  })