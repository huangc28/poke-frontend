import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderMenu from './HeaderMenu'

storiesOf('Header Menu', module)
  .add('Header Menu', () => (
    <HeaderMenu />
  ))