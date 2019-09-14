import React from 'react'
import { storiesOf } from '@storybook/react'

import Source from './Source'

storiesOf('Source', module)
  .add('Source', () => {
    return (
      <Source
        fallbackSourceWidth={600}
        fallbackSourceHeight={420}
      />
    )
  })