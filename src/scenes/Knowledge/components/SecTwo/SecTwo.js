import React from 'react'
import styled from 'styled-components'
import AccIcon from '@material-ui/icons/Person'
import Magnifier from '@material-ui/icons/Search'

import { size14Mixin, size26Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'
import TopArticleLayout from '@poke/layouts/TopArticleLayout'
import IconStat from '@poke/components/IconStat'

const Pin = styled.div`
  width: 0.3125rem;
  height: 0.9375rem;
  border: solid 1px white;
  background-color: white;
  border-radius: 4px;
  margin-right: 0.625rem;
`

const Topic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.6875rem;
`

const IntroContainer = styled.div`
  float: left;
`

const Title = styled.p`
  ${size26Mixin}
  color: ${colors.white};
  margin: 0;
  letter-spacing: 0.8125rem;
`

const ArticleStat = styled.div`
  display: flex;
  margin-top: 1.5rem;
`
const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Summary = styled.p`
  ${size14Mixin}
  color: ${colors.white};
  margin: 1.625rem 0 0 0;
  line-height: 1.57;
  letter-spacing: 0.175rem;
`

const More = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 2.25rem 0 0 0;
`

const SecTwo = () => {
  const Left = () => (
    <React.Fragment>
      <Topic>
        <Pin/>
        <p>
          營養小百科
        </p>
      </Topic>

      <IntroContainer>
        <img
          src='https://via.placeholder.com/920x480'
        />
      </IntroContainer>
      <div style={{ clear: 'both' }} />
    </React.Fragment>
  )

  const Right = () => (
    <React.Fragment>
      <Title>
        必備胺基酸寵物必備胺基酸寵物必備胺基酸
      </Title>

      <ArticleStat>
        <IconStat
          icon={
            <AccIcon
              fontSize='small'
            />
          }
          text='2 days'
        />

        <IconStat
          icon={
            <Magnifier
              fontSize='small'
            />
          }
          text='999'
        />
      </ArticleStat>

      <SummaryContent>
        <Summary>
          必備胺基酸寵物必備胺基酸寵物必備寵
          物必備胺基酸胺基酸寵物必備胺基酸寵
          物必備胺基酸寵物必備胺基酸寵物必備
          胺基酸寵物必備胺基酸寵物必備
          胺基酸
        </Summary>

        <More>
          <IconStat
            icon={
              <AccIcon
                fontSize='small'
              />
            }
            text='more'
            onClick={evt => {
              console.log('trigger more')
            }}
          />
        </More>
      </SummaryContent>
    </React.Fragment>
  )

  return (
    <TopArticleLayout
      left={<Left />}

      right={<Right />}
    />
  )
}

export default SecTwo