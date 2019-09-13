import React from 'react'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

import DESKTOP from './images/01.jpg'
import MOBILE from './images/01_s.jpg'

const Section = styled.section`
  @media (max-width: 576px) {
    position: relative;
    background: url(${MOBILE})  right top;
    background-size:100%;
    width: 100%;
    height: 400px;
  }
  @media (min-width: 577px) {
    position: relative;
    padding-top: 9.75rem;
    display: flex;
    flex-direction: row;
    background: url(${DESKTOP}) no-repeat right top;
    background-size: cover;
    background-color: ${colors.hintOfRed};
    width: 100%;
    height: 29.25rem;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
  }
`


const Slogen = styled.p`
  @media (max-width: 576px) {
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
  @media (min-width: 577px) {
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