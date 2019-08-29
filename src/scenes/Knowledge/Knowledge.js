import React, { useEffect } from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import T from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import HotArticles from '@poke/components/HotArticles'
import ArticleGrid from '@poke/components/ArticleGrid'
import ContactLayout from '@poke/layouts/ContactLayout'
import sliceArticles from '@poke/util/sliceArticles'
import Paginator from '@poke/components/Paginator'
import { insetShadow } from '@poke/styles/shadow'

import Main from '../../layouts/Main'
import SecTwo from './components/SecTwo'
import { PER_PAGE } from './constants/articles'
import {
  fetchNutritionArticles,
  selectNutritionArticles,
  selectNutritionArticlesTotalCount,
} from './services/redux/nutritionArticles'

const ArticlesContainer = styled.div`
  ${insetShadow}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.4375rem 3.875rem 0;
  & > div {
    margin-bottom: 4.625rem;
  }
`

const PaginatorContainer = styled.div`
  padding-bottom: 3.125rem;
`

const SectionOne = styled.div`
  min-height: 33rem;
`

const SectionTwo = styled.div`
  min-height: 30rem;
`

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
  nutritionArticlesTotalCount,
  history,
}) {
  const [topArticle, restArticle] = sliceArticles(nutritionArticles)
  const pageCount = countTotalPages(PER_PAGE, nutritionArticlesTotalCount)

  useEffect(() => {
    // forcing to fetch the first page.
    fetchNutritionArticles()
  }, [])

  return (
    <Main>
      <SectionOne>
        <HotArticles
          onClickArticle={({ articleID }) => history.push(`/articles/${articleID}`)}
        />
      </SectionOne>

      <SectionTwo>
        <SecTwo
          article={topArticle}
          onClickArticle={() => history.push(`/articles/${topArticle.article_id}`)}
        />
      </SectionTwo>

      <ContactLayout>
        <ArticlesContainer>
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
                  history.push(`/articles/${article.article_id}`)
                }}
              />
            ))
          }
        </ArticlesContainer>

        <PaginatorContainer>
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
        </PaginatorContainer>
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

export default compose(
  connect(mapToProps, {
    fetchNutritionArticles,
  }),
  withRouter
)(Knowledge)
