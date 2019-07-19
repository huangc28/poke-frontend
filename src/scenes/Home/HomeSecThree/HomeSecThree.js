import React from 'react'
import styled from 'styled-components'

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
`

const Text = styled.p`
  color: #fff;
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