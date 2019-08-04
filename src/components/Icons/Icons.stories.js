import React from 'react'
import { storiesOf } from '@storybook/react'

import { Facebook, Instagram } from './Icons'

storiesOf('Icons', module)
  .add('Facebook', () => (
    <Facebook />
  ))
  .add('Instagram', () => (
    <Instagram />
  ))