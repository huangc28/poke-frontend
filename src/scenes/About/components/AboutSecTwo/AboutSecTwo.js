import React from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'

import BKImg from './images/02.png'
import LoveImg from './images/04.png'
import RespImg from './images/05.png'
import LearnImg from './images/06.png'

const Section = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    padding: 25px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    padding: 25px 10vw;
  }
  margin: 0px;
  background: url(${BKImg}) center fixed;
`
const Title = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    font-size: 14px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    font-size: 26px;
  }
  
  font-weight: bold;
  line-height: 1;
  letter-spacing: 1.4px;
  color: ${colors.prussianBlue};
  
  & > hr {
    border: solid 1px;
  }
`

const Row = styled.div`
  margin: 0px;
  padding: 10px;

  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: block;
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
  @media all and (max-width: 576px), all and (max-height: 576px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 1.05px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    width: ${props => !!props.width? props.width: '50%'};
    font-size: 16px;
    letter-spacing: 3.2px;
  }
  
  line-height: 1.38;
  color: ${colors.prussianBlue};
`
const SubTitle = styled.h3`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.9px;
    color: ${colors.prussianBlue};
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 1.8px;
    color: ${colors.prussianBlue};
  }
` 

function AboutSecTwo () {
    return (
        <Section>
            <Title>
              <h3>剝殼POKE 承諾</h3>
              <hr/>
            </Title>
            <Row scaleY={true}>
              <Column width='60%'>
                <SubTitle>Love(愛)</SubTitle>
                <p>
                  剝殼計畫是由愛出發的品牌，我們相信愛他就要
                  從最基本的飲食與營養出發，有了愛的根基才有
                  今天的剝殼計畫，因此我們會秉持這個初衷繼續
                  走下去！
                </p>
              </Column>
              <Column width='40%'>
                <img src={LoveImg} style={{ display: 'block', margin: 'auto'}}/>
              </Column>
            </Row>
            <Row>
              <Column width='50%'>
                <img src={RespImg} style={{ display: 'block', margin: 'auto'}}/>
              </Column>
              <Column width='50%'>
                <SubTitle>Responsibility(責任)</SubTitle>
                <p>
                  剝殼計畫是以寵物營養與知識為基礎的品牌，所提供的資訊會影響千千萬萬
                  的毛小孩，因此我們必須為內容的正確性負起責任，如果家長們發現有錯請
                  務必告知我們，剝殼計畫絕對勇於改正！
                </p>
              </Column>
            </Row>
            <Row scaleY={true}>
              <Column width='60%'>
                <SubTitle>Learning(學習)</SubTitle>
                <p>
                  剝殼計畫會持續努力的學習，在這個進步快速的時代巨輪中，
                  將我們所得到的最新資訊即時提供給大家，讓家長們可以跟著
                  我們一同學習、一同成長！
                </p>
              </Column>
              <Column width='40%'>
                <img src={LearnImg} style={{ display: 'block', margin: 'auto'}}/>
              </Column>
            </Row>
        </Section>
    )
}

export default AboutSecTwo