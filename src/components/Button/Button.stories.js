import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'
import FunnelImg from './images/48.png'

storiesOf('Button', module)
  .add('Normal size button', () => (
    <Button
      text='篩選 GO'
    >
      <img
        width={40}
        height={56}
        src={FunnelImg}
      />
    </Button>
  ))
  .add('Small size button', () => (
    <Button>

    </Button>
  ))
