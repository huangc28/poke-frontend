import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import Img from '@poke/components/Img'
import { insetShadow } from '@poke/styles/shadow'
import FetchHotArticles from '@poke/hoc/FetchHotArticles'

import LargeIntro from './components/LargeIntro'
import NormalIntro from './components/NormalIntro'
import BGImg from './images/07.png'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: url(${BGImg}) no-repeat center center fixed;
  background-size: cover;
  padding: 3.5rem 0;
  ${insetShadow}
`

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  margin-right: 1.25rem;
`

const Right = styled.div`
  width: 38.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    margin-bottom: 1.2rem;
  }
`


const HotArticles = ({ articles, onClickArticle }) => {
  const top = articles[0]
  const rest = articles.slice(1)

  return (
    <Section>
      <Content>
        <Left>
          {
            top && (
              <LargeIntro
                bannerText={top.title}
                onClick={evt => onClickArticle({ evt, articleID: top.article_id })}
              >
                <Img
                  fallbackImgWidth={600}
                  fallbackImgHeight={420}
                  src={top.img || `https://via.placeholder.com/${600}x${420}`}
                  style={{ cursor: 'pointer', width: '600px', height: '420px' }}
                />
              </LargeIntro>
            )
          }
        </Left>

        <Right>
          {
            rest.length > 0 && (
              rest.map((article, index) => (
                <NormalIntro
                  bannerText={article.title}
                  key={index}
                  onClick={evt => onClickArticle({ evt, articleID: article.article_id })}
                >
                  <Img
                    fallbackImgWidth={300}
                    fallbackImgHeight={200}
                    src={article.img || `https://via.placeholder.com/${300}x${200}`}
                    style={{ cursor: 'pointer', width: '300px', height: '200px' }}
                  />
                </NormalIntro>
              ))
            )
          }
        </Right>
      </Content>
    </Section>
  )
}

HotArticles.propTypes = {
  articles: T.arrayOf(
    T.shape({
      img: T.string,
      descript: T.string,
    })
  ),
  onClickArticle: T.func.isRequired,
}

HotArticles.defaultProps = {
  articles: [],
}

export default FetchHotArticles(HotArticles)
