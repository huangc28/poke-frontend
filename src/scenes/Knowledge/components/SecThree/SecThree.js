import React from 'react'
import ContactLayout from '@poke/layouts/ContactLayout'

import ArticleGrid from '@poke/components/ArticleGrid'

const SecThree = () => {
  return (
    <ContactLayout>
      <ArticleGrid
        tagNum={2}
        title='必備胺基酸寵物必備胺基酸'
        summary='必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸'
        timeAgo='2 days ago'
        numViewed={999}
        onClickMore={() => {
          console.log('trigger on click more')
        }}
      />

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
    </ContactLayout>
  )
}

export default SecThree