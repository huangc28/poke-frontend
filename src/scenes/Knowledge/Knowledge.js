import React, { useEffect } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'

import HotArticles from '@poke/components/HotArticles'
import ArticleGrid from '@poke/components/ArticleGrid'
import ContactLayout from '@poke/layouts/ContactLayout'
import compose from '@poke/util/compose'
import Paginator from '@poke/components/Paginator'

import Main from '../../layouts/Main'
import SecTwo from './components/SecTwo'
import { sayHello,fetchHotArticles, selectHotArticles } from './services/redux'

// @todo these articles should be pull from server side
// const articles = [
//   {
//     img: 'https://via.placeholder.com/600x420',
//     bannerText: '必備胺基酸-寵物必備胺基酸寵物必備胺基酸',
//   },
//   {
//     img: 'https://via.placeholder.com/300x200',
//     bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
//   },
//   {
//     img: 'https://via.placeholder.com/300x200',
//     bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
//   },
//   {
//     img: 'https://via.placeholder.com/300x200',
//     bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
//   },
//   {
//     img: 'https://via.placeholder.com/300x200',
//     bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
//   }
// ]

const foodArticles = [
  {
    img: 'https://via.placeholder.com/600x420',
    title: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
    descript: '必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸',
    visit: 10,
    updated_at: '2 days'
  },
  {
    img: 'https://via.placeholder.com/300x200',
    title: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
    descript: '必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸',
    visit: 10,
    updated_at: '5 minutes ago'
  },
  {
    img: 'https://via.placeholder.com/300x200',
    title: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
    descript: '必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸',
    visit: 10,
    updated_at: '10 minutes ago'
  },
  {
    img: 'https://via.placeholder.com/300x200',
    title: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
    descript: '必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸',
    visit: 10,
    updated_at: 'just now',
  },
  {
    img: 'https://via.placeholder.com/300x200',
    title: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸',
    descript: '必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸',
    visit: 10,
    updated_at: 'just now'
  }
]

const Knowledge = ({ fetchHotArticles, articles, sayHello }) => {
  console.log('DEBUG articles !!!', articles)

  const sliceArticles = compose(
    ([topArticle, restArticle]) => [topArticle[0] || null, restArticle],
    articles => [articles.slice(0, 1), articles.slice(1)]
  )

  const [topArticle, restArticle] = sliceArticles(foodArticles)

  useEffect(() => {
    fetchHotArticles()
    // console.log('DEBUG@@@', fetchHotArticles())

    sayHello()
  }, [articles])

  return (
    <Main>
      <HotArticles
        articles={articles}
      />

      <SecTwo
        article={topArticle}
      />

      <ContactLayout>
        {
          restArticle.map((article, index) => (
            <ArticleGrid
              key={index}
              tagNum={2}
              title={article.title}
              summary={article.descript}
              timeAgo={article.updated_at}
              numViewed={article.visit}
              onClickMore={() => {
                console.log('trigger on click more')
              }}
            />
          ))
        }

        <div>
          <Paginator
            breakLabel={'...'}
            pageCount={15}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={() => {
              console.log('trigger page change')
            }}
          />
        </div>
      </ContactLayout>
    </Main>
  )
}

Knowledge.propTypes = {
  fetchHotArticles: T.func.isRequired,
  article: T.array,
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state)

  return {
    articles: state.knowledge.hotArticles,
  }
}

export default connect(mapStateToProps, {
  sayHello,
  fetchHotArticles,
})(Knowledge)