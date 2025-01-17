import React from 'react'
import styled from 'styled-components'

import BGImg from './images/07.png'
import FoodDecide from './images/08.png'
import Moscot from './images/09.png'
import ProdOne from './images/34.png'
import ProdTwo from './images/35.png'
import ProdThree from './images/36.png'
import ProdFour from './images/37.png'
import FoodOne from './images/38.png'
import FoodTwo from './images/39.png'
import FoodThree from './images/40.png'

const Section = styled.section`
  @media all and (max-width: 576px), all and (max-height: 576px) {
      display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
      display: flex;
      flex-direction: column;
      background: url(${BGImg}) no-repeat center center fixed;
      background-size: cover;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 4.125rem 0;
      box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
  }
`

const IntroUpper = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    flex-direction: row;
}
`
const UpperLeft = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    margin-right: 2rem;
  
    & > h3 {
      max-width: 290px;
      padding-bottom: 0.3125rem;
      border-bottom: solid 1px;
      margin-bottom: 0;
      margin-top: 0;
    }
  
    & > p {
      font-size: 0.875rem;
      white-space: nowrap;
      margin-top: 0.5rem;
      line-height: 1.57;
      margin-bottom: 0;
    }
}  
`

const UpperRight = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    & > img {
      width: 9.5rem;
      height: 9.5rem;
    }

    & > p {
      font-size: 0.875rem;
    }
}
`

const IntroLower = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
}
`

const LowerLeft = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    flex-direction: column;
    margin-right: 2.625rem;
}
`

const FoodDecideImg = styled.img`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    width: 22rem;
    height: 6.375rem;
}
`

const FoodImgContainer = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-end;
  
    & > img {
      width: 8.5rem;
      height: 8.5rem;
    }
}
`

const LowerRight = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
`

const FoodText = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    line-height: 1.375rem;
  
    & > h3 {
      border-bottom: solid 1px;
      max-width: 18.125rem;
      padding-bottom: 0.3125rem;
    }
  
    & > p {
      font-size: 0.875rem;
      font-size: 14px;
      margin: 0;
      line-height: 1.57;
      min-width: 16.6875rem;
      margin-top: 0.5rem;
    }
}
`


const MoscotContainer = styled.div`
@media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
}
@media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    align-items: flex-end;
}
`

const prodImages = [
  ProdOne,
  ProdTwo,
  ProdThree,
  ProdFour,
]

const foodImages = [
  FoodOne,
  FoodTwo,
  FoodThree,
]

const HomeSecTwo = () => {
  return (
    <Section>
      <IntroUpper>
        <UpperLeft>
          <h3>
            剝殼計畫
          </h3>
          <p>
            不論是逛著寵物店一排排的貨架<br/>
            或是看著網路商城一張張的圖片<br/>
            錯綜複雜的標示像是一本化學課本<br/>
            琳瑯滿目的商品讓人眼花撩亂
          </p>
        </UpperLeft>

        <UpperRight>
          {
            prodImages
              .map((imgSrc, index) =>
                <img key={index} src={imgSrc} />
              )
          }
        </UpperRight>
      </IntroUpper>

      <IntroLower>
        <LowerLeft>
          <FoodDecideImg src={FoodDecide} />

          <FoodImgContainer>
            {
              foodImages
                .map((imgSrc, index) =>
                  <img
                    src={imgSrc}
                    key={index}
                  />
                )
            }
          </FoodImgContainer>
        </LowerLeft>

        <LowerRight>
          <FoodText>
            <h3>
              鮮食 生食 乾食
            </h3>
            <p>
              有人說鮮食新鮮最健康 <br />
              但也有人說：價格昂貴品質不一致 <br />
              有人說生食成分最天然 <br />
              但也有人說：細菌滋生衛生有疑慮 <br />
              有人說乾乾營養最均衡 <br />
              但也有人說：水分太少對腎臟不好 <br />
              每每都讓我們感到疑惑： <br />
              到底要給寵物吃什麼比較適合呢！？
            </p>
          </FoodText>
          <MoscotContainer>
            <img src={Moscot} />
          </MoscotContainer>
        </LowerRight>
      </IntroLower>
    </Section>
  )
}

export default HomeSecTwo