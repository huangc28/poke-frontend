import React from 'react'
import { storiesOf } from '@storybook/react'

import InfoContainer from './InfoContainer'

storiesOf('User', module)
  .add('Info Container', () => (
    <InfoContainer />
  ))
