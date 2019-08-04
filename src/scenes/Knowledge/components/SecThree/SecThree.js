import React from 'react'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

import ArticleGrid from './components/ArticleGrid'
import ContactColumn from './components/ContactColumn'

const Section = styled.section`
  display: grid;
  grid-template-columns: 72.5% 27.5%;
  background-color: ${colors.white};
`

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7.4375rem;
`

const Content = styled.div`
  & > div {
    margin-bottom: 4.625rem;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.gallery};
`

const ContactContainer = styled.div`
  width: 18.125rem;
  padding-top: 8.6rem;
`

const SecThree = () => {
  return (
    <Section>
      <Left>
        <Content>
          <ArticleGrid
            tagNum={2}
            title='必備胺基酸寵物必備胺基酸'
            summary='必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸'
            timeAgo='2 days ago'
            numViewed={999}
            onClickMore={() => {
              console.log('trigger on click more')
            }}
          />

          <ArticleGrid
            tagNum={2}
            title='必備胺基酸寵物必備胺基酸寵物必備胺基酸'
            summary='必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸'
            timeAgo='2 days ago'
            numViewed={999}
            onClickMore={() => {
              console.log('trigger on click more')
            }}
          />

          <ArticleGrid
            tagNum={2}
            title='必備胺基酸寵物必備胺基酸寵物必備胺基酸'
            summary='必備胺基酸寵物必備胺基酸寵物必備寵物必備胺基酸胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸寵物必備胺基酸'
            timeAgo='2 days ago'
            numViewed={999}
            onClickMore={() => {
              console.log('trigger on click more')
            }}
          />
        </Content>
      </Left>
      <Right>
        <ContactContainer>
          <ContactColumn />
        </ContactContainer>
      </Right>
    </Section>
  )
}

export default SecThree