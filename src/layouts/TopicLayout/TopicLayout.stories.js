import React from 'react'
import { storiesOf } from '@storybook/react'

import TopicLayout from './TopicLayout'

storiesOf('Layouts', module)
  .add('Topic Layout', () => {
    return (
      <TopicLayout
        topic='訂閱我們'
      >
        hello world
      </TopicLayout>
    )
  })
