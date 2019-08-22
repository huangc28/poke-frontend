import React from 'react'
import { storiesOf } from '@storybook/react'

import SingleArticle from './SingleArticle'

storiesOf('scenes', module)
  .add('Single Articles', () => {
    return (
      <SingleArticle />
    )
  })