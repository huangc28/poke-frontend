import React, { useEffect, useState } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import AccIcon from '@material-ui/icons/Person'
import Magnifier from '@material-ui/icons/Search'

import Main from '@poke/layouts/Main'
import TopArticleLayout from '@poke/layouts/TopArticleLayout'
import ContactLayout from '@poke/layouts/ContactLayout'
import { size26Mixin, size14Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'
import HotArticles from '@poke/components/HotArticles'
import IconStat from '@poke/components/IconStat'
import Paginator from '@poke/components/Paginator'
import ArticleGrid from '@poke/components/ArticleGrid'
import TimeAgo from '@poke/components/TimeAgo'
import Img from '@poke/components/Img'
import { PER_PAGE } from '@poke/services/constants/articles'

import {
  fetchCanArticles,
  selectCanArticles,
  selectCanArticlesTotalCount
} from './services/redux/canArticles'
import { fetchDryFoodArticles, selectDryFoodArticles, selectDryFoodArticlesTotalCount } from './services/redux/dryFoodArticles'

import Tabs, { TabBar, Tab, TabPanel } from './components/Tabs'

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
}) {
  const [articleTotalCount, setArticleTotalCount] = useState(dryFoodArticlesTotalCount)
  const [articleFetcher, setArticleFetcher] = useState(fetchDryFoodArticles)
  const [displayArticles, setDisplayArticles] = useState(dryFoodArticles)
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
    setDisplayArticles(displayArticles)

    const articleFetcher = getArticleFetcher(tabID)
    setArticleFetcher(articleFetcher)

    const articleTotalCount = getTabbedArticleTotalCount(tabID)
    setArticleTotalCount(articleTotalCount)
  }, [tabID])

  const top = displayArticles[0] || {}
  const rest = displayArticles.slice(1)

  return (
    <Main>
      <HotArticles />

      <TopArticleLayout
        left={
          <React.Fragment>
            <Tabs defaultTab={DRY_FOOD_TAB_ID}>
              <TabBar>
                <Tab
                  id={DRY_FOOD_TAB_ID}
                  onClick={evt =>{
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
                <IntroContainer>
                  <Img
                    src={top.img}
                    fallbackImgWidth={920}
                    fallbackImgHeight={480}
                  />
                </IntroContainer>
                <div style={{ clear: 'both' }} />
              </TabPanel>

              <TabPanel
                whenActive={CAN_FOOD_TAB_ID}
              >
                <IntroContainer>
                  <Img
                    src={top.img}
                    fallbackImgWidth={920}
                    fallbackImgHeight={480}
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
              { top.title }
            </Title>

            <ArticleStat>
              <IconStat
                icon={
                  <AccIcon
                    fontSize='small'
                  />
                }
                text={
                  <TimeAgo
                    toTimestamp
                    time={top.updated_at || ''}
                  />
                }
              />

              <IconStat
                icon={
                  <Magnifier
                    fontSize='small'
                  />
                }
                text={top.visit}
              />
            </ArticleStat>

            <SummaryContent>
              <Summary>
                <div dangerouslySetInnerHTML={{ __html: top.descript }}/>
              </Summary>

              <More>
                <IconStat
                  icon={
                    <AccIcon
                      fontSize='small'
                    />
                  }
                  text='more'
                  onClick={evt => {
                    console.log('trigger more')
                  }}
                />
              </More>
            </SummaryContent>
          </React.Fragment>
        }
      />

      <ContactLayout>
        {
          rest.map((article, index) => (
            <ArticleGrid
              key={index}
              tagNum={index + 1}
              title={article.title}
              summary={article.descript}
              timeAgo={article.updated_at}
              numViewed={article.visit}
              img={
                <Img
                  src={article.img}
                  fallbackImgWidth={300}
                  fallbackImgHeight={200}
                />
              }
              onClickMore={() => {
                console.log('clicked on index', index)
              }}
            />
          ))
        }

        <div>
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
        </div>
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

export default connect(mapToProps, {
  fetchCanArticles,
  fetchDryFoodArticles,
})(FoodKnwledge)
