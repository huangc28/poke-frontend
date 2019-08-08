import React from 'react'
import { storiesOf } from '@storybook/react'

import ContactLayout from './ContactLayout'

storiesOf('Layouts', module)
  .add('Contact Layouts', () => {
    return (
      <ContactLayout>
        contact layout
      </ContactLayout>
    )
  })