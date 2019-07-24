import React from 'react'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

import BGImg from './images/15.png'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${BGImg}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 7.3125rem;
  box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
`

const Text = styled.p`
  color: ${colors.white};
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.8;
`

const HomeSecThree = () => {
  return (
    <Section>
      <Text>
        我們是"剝殼計畫" <br />
        為解決問題，我們提供以下服務 <br />
      </Text>
    </Section>
  )
}

export default HomeSecThree