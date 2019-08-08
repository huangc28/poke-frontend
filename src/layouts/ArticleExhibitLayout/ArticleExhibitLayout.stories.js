import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleExhibitLayout from './ArticleExhibitLayout'

storiesOf('Layouts', module)
  .add('Article Exhibit Layout', () => {
    return (
      <ArticleExhibitLayout>
        hello
      </ArticleExhibitLayout>
    )
  })