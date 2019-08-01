import React from 'react'
import { storiesOf } from '@storybook/react'

import SecOne from './SecOne'

storiesOf('Knowledge', module)
  .add('Section One', () => {
    return (
      <SecOne/>
    )
  })
