import React from 'react'
import styled from 'styled-components'

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

const SecOne = () => {
  return (
    <Section>
      <Content>
        <Left>
          <LargeIntro
            bannerText='必備胺基酸-寵物必備胺基酸寵物必備胺基酸'
          >
            <img
              src='https://via.placeholder.com/600x420'
            />
          </LargeIntro>
        </Left>

        <Right>
          <NormalIntro>
            <img
              src='https://via.placeholder.com/300x200'
            />
          </NormalIntro>

          <NormalIntro>
            <img
              src='https://via.placeholder.com/300x200'
            />
          </NormalIntro>

          <NormalIntro>
            <img
              src='https://via.placeholder.com/300x200'
            />
          </NormalIntro>

          <NormalIntro>
            <img
              src='https://via.placeholder.com/300x200'
            />
          </NormalIntro>
        </Right>
      </Content>
    </Section>
  )
}

export default SecOne
