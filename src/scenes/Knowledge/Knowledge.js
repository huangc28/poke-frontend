import React from 'react'

import HotArticles from '@poke/components/HotArticles'

import Main from '../../layouts/Main'
import SecTwo from './components/SecTwo'
import SecThree from './components/SecThree'

// @todo these articles should be pull from server side
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

const Knowledge = () => {
  return (
    <Main>
      <HotArticles
        articles={articles}
      />

      <SecTwo />

      <SecThree />
    </Main>
  )
}

export default Knowledge