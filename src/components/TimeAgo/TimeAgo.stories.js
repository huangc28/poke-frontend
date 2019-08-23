import React from 'react'
import { storiesOf } from '@storybook/react'

import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'
import TimeAgo from './TimeAgo'


storiesOf('Time ago', module)
  .add('Time conversion', () => {
    const timestamp = convertDateTimeStringToTimestamp('2019-08-02 01:01:03')

    return (
      <TimeAgo
        time={timestamp}
      />
    )
  })