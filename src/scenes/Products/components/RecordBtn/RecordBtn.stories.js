import React from 'react'
import { storiesOf } from '@storybook/react'

import RecordBtn from './RecordBtn'

storiesOf('Product', module)
  .add('Product RecordBtn', () => (
    <RecordBtn />
  ))