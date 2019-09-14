import React from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import Img from '@poke/components/Img'
import Source from '@poke/components/Source'

const Section = styled.div`
  margin: 0px;
  background-color: ${colors.prussianBlue};

  @media all and (max-width: 576px), all and (max-height: 576px) {
    padding: 15px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    padding: 70px 10vw;
  }
`

const Title = styled.div`
  color: ${colors.white};
  & > hr {
    border: solid 1px;
  }
  @media all and (max-width: 576px), all and (max-height: 576px) {
    
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    font-size: 26px;
  }
`
const Row = styled.div`
  margin: 0px;
  
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: block;
    padding: 10px;

    transform: scaleY(${props => !!props.scaleY? -1: 1});
    & > * {
      transform: scaleY(${props => !!props.scaleY? -1: 1});
    }
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    display: flex;
  }
`

const Column = styled.div`
  line-height: 1.38;
  color: ${colors.white};

  @media all and (max-width: 576px), all and (max-height: 576px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 1.05px;
    & > ul {
      list-style: none;
      padding: 0px;
      font-size: 12px;
      font-weight: 300;
      line-height: 1.83;
      letter-spacing: 0.6px;  
    }
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    padding: ${props => !!props.padding? props.padding:'0px'};

    width: 50%;
    font-size: 16px;
    letter-spacing: 3.2px;
    & > ul {
      list-style: none;
      padding: 0px;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.38;
      letter-spacing: 3.2px;
    }
  }  
`
const SubTitle = styled.h3`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.9px;
    color: ${colors.white};
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 1.8px;
    color: ${colors.white};
  }
` 


function AboutSecThree () {
    return (
        <Section>
          <Title>
            <h3>剝殼POKE 專業背景</h3>
            <hr/>
          </Title>
          <Row>
            <Column>
              
                <picture>
                  <Source media="(max-width: 576px), (max-height: 576px)" srcSet={''} fallbackImgWidth={330} fallbackImgHeight={380}/>
                  <Source media="(min-width: 577px) and (min-height: 577px)" srcSet={''} fallbackImgWidth={520} fallbackImgHeight={600}/>
                  <Img fallbackImgWidth={520} fallbackImgHeight={600} style={{ display:'block', margin:'auto', width: '100%', 'max-width': '520px', 'max-height': '600px' }}/>
                </picture>
              
            </Column>
            <Column>
                <SubTitle>食品證照</SubTitle>
                <ul>
                  <li>1、生產與作業管理技術師證照</li>
                  <li>2、乙級食品檢驗分析技術士</li>
                  <li>3、國家考試高考三級食品技師</li>
                  <li>4、保健食品初級工程師能力鑑定</li>
                  <li>5、經濟部初級食品品保工程師</li>
                  <li>6、HACCP(食品安全管制系統)基礎及進階訓練合格證書</li>
                  <li>7、人類食品預防性控制PCQI證照</li>
                  <li>8、食療養生諮詢師</li>
                </ul>
                <SubTitle>寵物相關證照</SubTitle>
                <ul>
                  <li>1、寵物職能專業認證</li>
                  <li>2、寵膳鮮食師</li>
                  <li>3、香港寵物營養學會貓咪初級營養證照</li>
                  <li>4、香港寵物營養學會狗狗初級營養證照</li>
                  <li>5、香港寵物營養學會乾飼料分析師</li>
                </ul>
            </Column>
          </Row>
        </Section>
    )
}

export default AboutSecThree