import React from 'react'
import { storiesOf } from '@storybook/react'

import AboutSecOne from './AboutSecOne'

storiesOf('About', module)
  .add('Section One', () => (
    <AboutSecOne />
  ))