import React from 'react'
import { storiesOf } from '@storybook/react'

import Img from './Img'

storiesOf('Image', module)
  .add('Image', () => {
    return (
      <Img
        fallbackImgWidth={600}
        fallbackImgHeight={420}
      />
    )
  })