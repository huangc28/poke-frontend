import React from 'react'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

import Desktop from './images/01.png'
import MobileStraight from './images/01_s.png'
import MobileLandscape from './images/01_s_landscape.png'

const Section = styled.section`
  // 手機 - 直向
  @media all and (max-width: 576px) {
    position: relative;
    background: url(${MobileStraight}) no-repeat right top;
    background-size: cover;
    width: 100%;
    height: 400px;
  }
  // 手機 - 橫向
  @media all and (min-width: 577px) and (max-height: 576px) {
    position: relative;
    background: url(${MobileLandscape}) no-repeat center;
    // background-size: ;
    background-color: ${colors.hintOfRed};
    width: 100%;
    height: 375px;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    position: relative;
    display: flex;
    flex-direction: row;
    background: url(${Desktop}) no-repeat right top;
    background-size: cover;
    background-color: ${colors.hintOfRed};
    width: 100%;
    height: 38rem;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
  }
`


const Slogen = styled.p`
  // 手機 - 直向
  @media all and (max-width: 576px) {
    position: absolute;
    top: 157px;
    left: 19px;
    width: 125px;
    height: 40px;
    font-family: MicrosoftJhengHei;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.47;
    letter-spacing: 1.28px;
    text-align: left;
    color: #3c4e6b;
  }
  // 手機 - 橫向
  @media all and (min-width: 577px) and (max-height: 576px) {
    display: none;
    padding: 0px;
    margin: 0px;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 2.9375rem;
  }
`

function HomeSecOne () {
  return (
    <Section>
      <Slogen>
        懂他，選擇最適合的愛給他
      </Slogen>
    </Section>
  )
}

export default HomeSecOne