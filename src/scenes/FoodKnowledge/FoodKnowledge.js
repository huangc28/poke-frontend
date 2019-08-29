import React, { useEffect, useState } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { compose } from 'redux'
import { withRouter } from 'react-router'

import Main from '@poke/layouts/Main'
import TopArticleLayout from '@poke/layouts/TopArticleLayout'
import ContactLayout from '@poke/layouts/ContactLayout'
import { size26Mixin, size14Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'
import HotArticles from '@poke/components/HotArticles'
import IconLabel from '@poke/components/IconLabel'
import { DateWhite, PPWhite, More as MoreIcon } from '@poke/components/Icons'
import Paginator from '@poke/components/Paginator'
import ArticleGrid from '@poke/components/ArticleGrid'
import TimeAgo from '@poke/components/TimeAgo'
import Img from '@poke/components/Img'
import { PER_PAGE } from '@poke/services/constants/articles'
import { insetShadow } from '@poke/styles/shadow'
import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'

import {
  fetchCanArticles,
  selectCanArticles,
  selectCanArticlesTotalCount
} from './services/redux/canArticles'
import {
  fetchDryFoodArticles,
  selectDryFoodArticles,
  selectDryFoodArticlesTotalCount
} from './services/redux/dryFoodArticles'

import Tabs, { TabBar, Tab, TabPanel } from './components/Tabs'

const SectionOne = styled.div`
  min-height: 33rem;
`
const SectionTwo = styled.div`
  min-height: 30rem;
`

const IntroContainer = styled.div`
  float: left;
`

const Title = styled.p`
  ${size26Mixin}
  color: ${colors.white};
  margin: 0;
  letter-spacing: 0.8125rem;
`

const ArticleStat = styled.div`
  display: flex;
  margin-top: 1.5rem;
`
const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Summary = styled.div`
  ${size14Mixin}
  color: ${colors.white};
  margin: 1.625rem 0 0 0;
  line-height: 1.57;
  letter-spacing: 0.175rem;
`

const More = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 2.25rem 0 0 0;
`

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

const DRY_FOOD_TAB_ID = 'dry_food_tab'
const CAN_FOOD_TAB_ID = 'can_food_tab'

function countTotalPages (perPage, totalCount) {
  const residual = totalCount % perPage
  let pages = Math.floor(totalCount / perPage)

  if (residual > 0) {
    pages++
  }

  return pages
}

function FoodKnwledge ({
  fetchCanArticles,
  fetchDryFoodArticles,
  canArticles,
  canArticlesTotalCount,
  dryFoodArticles,
  dryFoodArticlesTotalCount,
  history,
}) {
  const [topArticle, setTopArticle] = useState({})
  const [restArticles, setRestArticles] = useState([])
  const [articleTotalCount, setArticleTotalCount] = useState(dryFoodArticlesTotalCount)
  const [articleFetcher, setArticleFetcher] = useState(fetchDryFoodArticles)
  const [tabID, setActiveTab] = useState(DRY_FOOD_TAB_ID)

  const getDisplayArticles = tabID => tabID === DRY_FOOD_TAB_ID
    ? dryFoodArticles
    : canArticles

  const getArticleFetcher = tabID => tabID === DRY_FOOD_TAB_ID
    ? fetchDryFoodArticles
    : fetchCanArticles

  const getTabbedArticleTotalCount = tabID => tabID === DRY_FOOD_TAB_ID
    ? canArticlesTotalCount
    : dryFoodArticlesTotalCount

  useEffect(() => {
    fetchCanArticles()
    fetchDryFoodArticles()
  }, [])

  useEffect(() => {
    const displayArticles = getDisplayArticles(tabID)
    const top = displayArticles[0] || {}
    const rest = displayArticles.slice(1)
    setTopArticle(top)
    setRestArticles(rest)

    const articleFetcher = getArticleFetcher(tabID)
    setArticleFetcher(articleFetcher)

    const articleTotalCount = getTabbedArticleTotalCount(tabID)
    setArticleTotalCount(articleTotalCount)
  }, [canArticles.length, dryFoodArticles.length, tabID])

  return (
    <Main>
      <SectionOne>
        <HotArticles
          onClickArticle={({ articleID }) => history.push(`/articles/${articleID}`)}
        />
      </SectionOne>

      <SectionTwo>
        <TopArticleLayout
          left={
            <React.Fragment>
              <Tabs defaultTab={DRY_FOOD_TAB_ID}>
                <TabBar>
                  <Tab
                    id={DRY_FOOD_TAB_ID}
                    onClick={evt => {
                      setActiveTab(DRY_FOOD_TAB_ID)
                      fetchCanArticles()
                    }}
                  >
                    乾飼料資料庫
                  </Tab>
                  <Tab
                    id={CAN_FOOD_TAB_ID}
                    onClick={evt => {
                      setActiveTab(CAN_FOOD_TAB_ID)
                      fetchDryFoodArticles()
                    }}
                  >
                    罐罐料資料庫
                  </Tab>
                </TabBar>

                <TabPanel
                  whenActive={DRY_FOOD_TAB_ID}
                >
                  <IntroContainer
                    onClick={
                      () => history.push(`/articles/${topArticle.article_id}`)
                    }
                  >
                    <Img
                      src={topArticle.img}
                      width={600}
                      height={420}
                      fallbackImgWidth={600}
                      fallbackImgHeight={420}
                    />
                  </IntroContainer>
                  <div style={{ clear: 'both' }} />
                </TabPanel>

                <TabPanel
                  whenActive={CAN_FOOD_TAB_ID}
                >
                  <IntroContainer
                    onClick={
                      () => history.push(`/articles/${topArticle.article_id}`)
                    }
                  >
                    <Img
                      src={topArticle.img}
                      width={600}
                      height={420}
                      fallbackImgWidth={600}
                      fallbackImgHeight={420}
                    />
                  </IntroContainer>
                  <div style={{ clear: 'both' }} />
                </TabPanel>
              </Tabs>
            </React.Fragment>
          }
          right={
            <React.Fragment>
              <Title>
                {topArticle.title}
              </Title>

              <ArticleStat>
                <IconLabel
                  icon={
                    <DateWhite
                      width={16}
                      height={16}
                    />
                  }
                  label={
                    <TimeAgo
                      time={
                        topArticle.updated_at
                          ? convertDateTimeStringToTimestamp(topArticle)
                          : Date.now()
                      }
                    />
                  }
                />

                <IconLabel
                  icon={
                    <PPWhite
                      width={16}
                      height={16}
                    />
                  }
                  label={topArticle.visit}
                />
              </ArticleStat>

              <SummaryContent>
                <Summary>
                  <div dangerouslySetInnerHTML={{ __html: topArticle.descript }} />
                </Summary>

                <More>
                  <IconLabel
                    icon={
                      <MoreIcon
                        width={16}
                        height={16}
                      />
                    }
                    label='more'
                    onClick={() => history.push(`/articles/${topArticle.article_id}`)}
                  />
                </More>
              </SummaryContent>
            </React.Fragment>
          }
        />
      </SectionTwo>

      <ContactLayout>
        <ArticlesContainer>
          {
            restArticles.map((article, index) => (
              <ArticleGrid
                key={index}
                tagNum={index + 1}
                title={article.title}
                summary={article.descript}
                timeAgo={article.updated_at || ''}
                numViewed={article.visit}
                img={
                  <Img
                    src={article.img}
                    fallbackImgWidth={300}
                    fallbackImgHeight={200}
                  />
                }
                onClickMore={() => history.push(`/articles/${article.article_id}`)}
              />
            ))
          }
        </ArticlesContainer>
        <PaginatorContainer>
          <Paginator
            breakLabel={'...'}
            pageCount={countTotalPages(PER_PAGE, articleTotalCount)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => {
              articleFetcher({
                offset: selected * PER_PAGE
              })
            }}
          />
        </PaginatorContainer>
      </ContactLayout>
    </Main>
  )
}

FoodKnwledge.propTypes = {
  canArticles: T.array,
  canArticlesTotalCount: T.number,

  dryFoodArticles: T.array,
  dryFoodArticlesTotalCount: T.number,

  fetchCanArticles: T.func.isRequired,
  fetchDryFoodArticles: T.func.isRequired,

  history: T.objectOf(T.any).isRequired,
}

FoodKnwledge.defaultProps = {
  canArticles: [],
  canArticlesTotalCount: 0,

  dryFoodArticles: [],
  dryFoodArticlesTotalCount: 0,
}

const mapToProps = state => ({
  canArticles: selectCanArticles(state),
  canArticlesTotalCount: selectCanArticlesTotalCount(state),

  dryFoodArticles: selectDryFoodArticles(state),
  dryFoodArticlesTotalCount: selectDryFoodArticlesTotalCount(state)
})

export default compose(
  connect(mapToProps, {
    fetchCanArticles,
    fetchDryFoodArticles,
  }),
  withRouter
)(FoodKnwledge)
