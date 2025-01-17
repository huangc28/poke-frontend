import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import T from 'prop-types'

import compose from '@poke/util/compose'
import colors from '@poke/styles/colors'
import { bold, size12Mixin, size14 } from '@poke/styles/font'
import FetchHotArticles from '@poke/hoc/FetchHotArticles'
import Img from '@poke/components/Img'
import Button from '@poke/components/Button'
import TimeAgo from '@poke/components/TimeAgo'
import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'

import Moscot from './images/10.png'
import MoscotS from './images/10_s.png'
import ConfusedMan from './images/11.png'
import StepFlagImg from './images/31.png'
import LoveImg from './images/19.png'
import ReadImg from './images/20.png'

import ArticleSlider from './components/ArticleSlider'

const Section = styled.section`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    padding: 0px;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    position: relative;
    padding-top: 2.125rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`

const PokePediaContainer = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: block;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`

const StepFlag = styled.img`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    position: absolute;
    top: 0%;
    right: 0%;
  }
`

const MoscotContainer = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    margin: 0px;
    padding-top: 30px;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    margin-right: 5.625rem;
  }
`


const Li = compose(size14, bold)(styled.li`
  color: ${colors.tickleMePink};
`)

const TextContainer = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    margin-top: 24px;
    & > h3 {
      width: 18.125rem;
      color: #3c4e6b;
    }
    & > h3:before {
        content: '01';
        margin-right: 10px;
    }
    & > ul {
        padding-left: 10px;
        list-style-type: none;
        line-height: 1.63;
    }
    & > ul > li:before {
        content: '-  '
    }
  }
  @media (min-width: 577px) and (min-height: 577px) {
    & > h3 {
      margin: 0 0 0.25rem 0;
      border-bottom: solid 1px;
      width: 18.125rem;
    }
    
    & > ul {
      padding-left: 1.125rem;
      margin: 0.5rem 0 0.625rem 0;
      list-style-type: square;
    }
    
    & > ul > li > span {
      line-height: 1.8;
    }
  }
`

const PokePediaDescContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  & > img {
    position: absolute;
    left: 52%;
    top: 22%;
  }
`

const PokePediaDesc = styled.p`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    & > br {
      display: none;
    }
    color: #3c4e6b;
  }
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 1.57;
`

const ArticlesContainer = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    height: 14.375rem;
    width: 100%;
    background-color: ${colors.concrete};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > h3 {
      font-weight: bold;
      margin: 0 0 1.4375rem 0;
    }
  }
`
const ArticleContainer = styled.div`
  width: 11.3125rem;
  height: 9.0625rem;
  display: flex;
  flex-direction: column;
`

const ArticleStatusBar = styled.div`
  width: 100%;
  height: 1.375rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0.25rem;

  & > img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }
`

const ReadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }
`

const Span = styled.span`
  ${size12Mixin}
`

const DesktopDiv = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
  }
`
const MobileDiv = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
    display: none;
  }
`


function HomeSecFour ({ history, articles }) {
  return (
    <Section>
      <StepFlag src={StepFlagImg} />

      <PokePediaContainer>
        {/* Poke moscot */}
        <MoscotContainer>
          <picture>
              <source media="(max-width: 576px)" srcSet={MoscotS}/>
              <source media="(min-width: 577px)" srcSet={Moscot}/>
              <img src={Moscot} style={{ display:'block', margin:'auto' }}/>
          </picture>
          {/* <img src={Moscot} srcSet={MoscotS}/> */}
        </MoscotContainer>

        <TextContainer>
          <h3>剝殼小百科</h3>
          <ul>
            <Li><span> 專業科學的背景 </span></Li>
            <Li><span> 提供優質易懂的 『寵物飲食文章』</span></Li>
          </ul>
          <PokePediaDescContainer>
            <PokePediaDesc>
              寵物飲食 <br />
              一門博大精深的領域 <br />
              但我們期許自己 <br />
              能以不斷精進的精神 <br />
              提供寵物飲食的專業 <br />
              讓你我、他 <br />
              一起成長!一起茁壯!
            </PokePediaDesc>
            <DesktopDiv>
              <img src={ConfusedMan}/>
            </DesktopDiv>
          </PokePediaDescContainer>
          <MobileDiv>
            <Button text='了解更多' size='block' theme='gray' onClick={e => {history.push('/knowledge')}}></Button>
          </MobileDiv>
        </TextContainer>
      </PokePediaContainer>

      <ArticlesContainer>
        <h3>
          精選熱門文章
        </h3>

        {/* Article Slider */}
        <ArticleSlider>
          {
            articles.map((article, index) => (
              <div key={index}>
                <ArticleContainer
                  onClick={() => history.push(`/articles/${article.article_id}`)}
                >
                  <Img
                    src={article.img || `https://via.placeholder.com/${181}x${123}`}
                    fallbackImgWidth={181}
                    fallbackImgHeight={123}
                    width={181}
                    height={123}
                  />
                  <ArticleStatusBar>
                    <LikeContainer>
                      <img src={LoveImg} />
                      <Span>
                        {article.visit}
                      </Span>
                    </LikeContainer>
                    <ReadContainer>
                      <img src={ReadImg} />
                      <Span>
                        <TimeAgo
                          time={
                            article.updated_at
                              ? convertDateTimeStringToTimestamp(article.updated_at)
                              : Date.now()
                          }
                        />
                      </Span>
                    </ReadContainer>
                  </ArticleStatusBar>
                </ArticleContainer>
              </div>
            ))
          }

        </ArticleSlider>
      </ArticlesContainer>
    </Section>
  )
}

HomeSecFour.proptypes = {
  articles: T.arrayOf(
    T.shape({
      img: T.string,
      descript: T.string,
    })
  ),
  onClickArticle: T.func.isRequired,
  history: T.objectOf(T.any).isRequired,
}

HomeSecFour.defaultProps = {
  articles: [],
}

export default compose(
  FetchHotArticles,
  withRouter,
)(HomeSecFour)