import React, { useEffect } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'

import HotArticles from '@poke/components/HotArticles'
import ArticleGrid from '@poke/components/ArticleGrid'
import ContactLayout from '@poke/layouts/ContactLayout'
import sliceArticles from '@poke/util/sliceArticles'
import Paginator from '@poke/components/Paginator'

import Main from '../../layouts/Main'
import SecTwo from './components/SecTwo'
import { PER_PAGE } from './constants/articles'
import {
  fetchNutritionArticles,
  selectNutritionArticles,
  selectNutritionArticlesTotalCount,
} from './services/redux/nutritionArticles'

function countTotalPages (perPage, totalCount) {
  const residual = totalCount % perPage
  let pages = Math.floor(totalCount / perPage)

  if (residual > 0) {
    pages++
  }

  return pages
}

function Knowledge({
  fetchNutritionArticles,
  nutritionArticles,
  nutritionArticlesTotalCount
}) {
  const [topArticle, restArticle] = sliceArticles(nutritionArticles)
  const pageCount = countTotalPages(PER_PAGE, nutritionArticlesTotalCount)

  useEffect(() => {
    // forcing to fetch the first page.
    fetchNutritionArticles()
  }, [])

  return (
    <Main>
      <HotArticles />

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
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            initialPage={0}
            onPageChange={({ selected }) => {
              fetchNutritionArticles({
                offset: selected * PER_PAGE
              })
            }}
          />
        </div>
      </ContactLayout>
    </Main>
  )
}

Knowledge.propTypes = {
  fetchNutritionArticles: T.func.isRequired,

  article: T.array,
  nutritionArticles: T.array,
  nutritionArticlesTotalCount: T.number,
}

const mapToProps = state => ({
  nutritionArticles: selectNutritionArticles(state),
  nutritionArticlesTotalCount: selectNutritionArticlesTotalCount(state),
})

export default connect(mapToProps, {
  fetchNutritionArticles,
})(Knowledge)