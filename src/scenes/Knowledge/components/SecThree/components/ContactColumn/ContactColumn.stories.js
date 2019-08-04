import React from 'react'
import { storiesOf } from '@storybook/react'

import ContactColumn from './ContactColumn'

storiesOf('Knowledge', module)
  .add('Contact Column', () => {
    return (
      <ContactColumn />
    )
  })
