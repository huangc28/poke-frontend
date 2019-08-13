import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Img from '@poke/components/Img'
import { insetShadow } from '@poke/styles/shadow'

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

const HotArticles = ({ articles }) => {
  const getArticleSect = articles => [articles.slice(0, 1), articles.slice(1)]
  const [top, rest] = getArticleSect(articles)

  return (
    <Section>
      <Content>
        <Left>
          {
            top.length > 0 && (
              <LargeIntro
                bannerText={top[0].descript}
                onClick={evt => {
                  // @todo redirect to article page
                  evt.stopPropagation()
                }}
              >
                <Img
                  fallbackImgWidth={600}
                  fallbackImgHeight={420}
                  src={top[0].img}
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
                  bannerText={article.descript}
                  key={index}
                  onClick={evt => {
                    // @todo redirect to article page
                    evt.stopPropagation()
                  }}
                >
                  <Img
                    fallbackImgWidth={300}
                    fallbackImgHeight={200}
                    src={article.img}
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
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      descript: PropTypes.string,
    })
  ),
}

HotArticles.defaultProps = {
  articles: [],
}

export default HotArticles
