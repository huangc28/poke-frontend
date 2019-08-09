import React from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';
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

import Tabs, { TabBar, Tab, TabPanel } from './components/Tabs'

// @todo these articles should be pull from server side
const hotArticles = [
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

const articleList = [
  {
    title: '必備胺基酸寵物必備胺基酸',
    summary: '必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸',
    timeAgo: '2 days ago',
    numViewed: 999,
    onClickMore() {
      console.log('trigger article 1')
    },
  },
  {
    title: '必備胺基酸寵物必備胺基酸',
    summary: '必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸',
    timeAgo: '2 days ago',
    numViewed: 999,
    onClickMore() {
      console.log('trigger article 2')
    },
  }
]

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

const Summary = styled.p`
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

const PaginatorContainer = styled.div``

const FoodKnwledge = () => {
  return (
    <Main>
      <HotArticles
        articles={hotArticles}
      />

      <TopArticleLayout
        left={
          <React.Fragment>
            <Tabs defaultTab='dry_food_db'>
              <TabBar>
                <Tab
                  id='dry_food_db'
                  onClick={() =>{
                    console.log('clicked on dry food db')
                    // @todo fetch relative articles from the API
                  }}
                >
                  乾飼料資料庫
                </Tab>

              <Tab
                id='can_food_db'
                onClick={() => {
                  console.log('clicked on can food db')
                  // @todo fetch relative articles from the API
                }}
              >
                  罐罐料資料庫
              </Tab>

              </TabBar>

              <TabPanel
                whenActive='dry_food_db'
              >
                <IntroContainer>
                  <img
                    src='https://via.placeholder.com/920x480'
                  />
                </IntroContainer>
                <div style={{ clear: 'both' }} />
              </TabPanel>

              <TabPanel
                whenActive='can_food_db'
              >
                <IntroContainer>
                  <img
                    src='https://via.placeholder.com/920x480'
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
              必備胺基酸寵物必備胺基酸寵物必備胺基酸
            </Title>

            <ArticleStat>
              <IconStat
                icon={
                  <AccIcon
                    fontSize='small'
                  />
                }
                text='2 days'
              />

              <IconStat
                icon={
                  <Magnifier
                    fontSize='small'
                  />
                }
                text='999'
              />
            </ArticleStat>

            <SummaryContent>
              <Summary>
                必備胺基酸寵物必備胺基酸寵物必備寵
                物必備胺基酸胺基酸寵物必備胺基酸寵
                物必備胺基酸寵物必備胺基酸寵物必備
                胺基酸寵物必備胺基酸寵物必備
                胺基酸
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
          articleList.map((article, index) => (
            <ArticleGrid
              key={index}
              tagNum={index + 1}
              title={article.title}
              summary={article.summary}
              timeAgo={article.timeAgo}
              numViewed={article.numViewed}
              onClickMore={article.onClickMore}
            />
          ))
        }

        <PaginatorContainer>
          <Paginator
            breakLabel={'...'}
            pageCount={15}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={() => {
              console.log('trigger page change')
            }}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </PaginatorContainer>
      </ContactLayout>
    </Main>
  )
}

export default FoodKnwledge
