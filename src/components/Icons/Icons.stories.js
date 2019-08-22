import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Facebook,
  Instagram,
  RecentUpdatedDate,
  NumViews,
} from './Icons'

storiesOf('Icons', module)
  .add('Facebook', () => (
    <Facebook />
  ))
  .add('Instagram', () => (
    <Instagram />
  ))
  .add('Recent updated time', () => (
    <RecentUpdatedDate />
  ))
  .add('Number of views', () => (
    <NumViews />
  ))