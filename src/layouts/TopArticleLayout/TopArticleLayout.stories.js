import React from 'react'
import { storiesOf } from '@storybook/react'

import TopArticleLayout from './TopArticleLayout'

storiesOf('Layouts', module)
  .add('Top article layout', () => {
    return (
      <TopArticleLayout
        left={
          <div>
            left part
          </div>
        }
        right={
          <div>
            right part
          </div>
        }
      />
    )
  })