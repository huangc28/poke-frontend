import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'
import FunnelImg from './images/48.png'
import PlusImg from './images/49.png'

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
  .add('Small size button with black theme', () => (
    <Button
      text='看更多'
      size='small'
      theme='black'
    >
      <img
        width={12}
        height={12}
        src={PlusImg}
      />
    </Button>
  ))
  .add('Gray background with more', () => (
      <Button
        text='了解更多'
        size='block'
        theme='gray'
        fontSize='13px'
      >
      </Button>
  ))
