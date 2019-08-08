import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleGrid from './ArticleGrid'

storiesOf('Knowledge', module)
  .add('Article Grid', () => {
    return (
      <ArticleGrid
        tagNum={2}
        title='必備胺基酸寵物必備胺基酸寵物必備胺基酸'
        summary='必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸'
        timeAgo='2 days ago'
        numViewed={999}
        onClickMore={() => {
          console.log('trigger on click more')
        }}
      />
    )
  })
