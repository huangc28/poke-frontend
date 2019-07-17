import React from 'react'
import { storiesOf } from '@storybook/react'

import HomeSecOne from './HomeSecOne'

storiesOf('Home', module)
  .add('Section One', () => (
    <HomeSecOne />
  ))