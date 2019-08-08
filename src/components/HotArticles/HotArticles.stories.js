import React from 'react'
import { storiesOf } from '@storybook/react'

import HotArticles from './HotArticles'

storiesOf('Hot Articles', module)
  .add('Hot Articles', () => {
    const articles = [
      {
        img: 'https://via.placeholder.com/600x420',
        bannerText: '必備胺基酸-寵物必備胺基酸寵物必備胺基酸',
      },
      {
        img: 'https://via.placeholder.com/300x200',
        bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
      },
      {
        img: 'https://via.placeholder.com/300x200',
        bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
      },
      {
        img: 'https://via.placeholder.com/300x200',
        bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
      },
      {
        img: 'https://via.placeholder.com/300x200',
        bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
      }
    ]

    return (
      <HotArticles
        articles={articles}
      />
    )
  })
