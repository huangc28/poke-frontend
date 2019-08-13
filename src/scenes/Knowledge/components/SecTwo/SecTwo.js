import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import AccIcon from '@material-ui/icons/Person'
import Magnifier from '@material-ui/icons/Search'

import { size14Mixin, size26Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'
import TopArticleLayout from '@poke/layouts/TopArticleLayout'
import IconStat from '@poke/components/IconStat'
import Img from '@poke/components/Img'

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

const Summary = styled.span`
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

const SecTwo = ({ article }) => {
  return (
    <TopArticleLayout
      left={
        <React.Fragment>
          <Topic>
            <Pin/>
            <p>
              營養小百科
            </p>
          </Topic>

          <IntroContainer>
            <Img
              src={article.img}
              fallbackImgWidth={600}
              fallbackImgHeight={420}
            />
          </IntroContainer>
          <div style={{ clear: 'both' }} />
        </React.Fragment>
      }

      right={
        <React.Fragment>
          <Title>
            { article.title }
          </Title>

          <ArticleStat>
            <IconStat
              icon={
                <AccIcon
                  fontSize='small'
                />
              }
              text={article.updated_at}
            />

            <IconStat
              icon={
                <Magnifier
                  fontSize='small'
                />
              }
              text={article.visit}
            />
          </ArticleStat>

          <SummaryContent>
            <Summary>
              <div dangerouslySetInnerHTML={{ __html: article.descript }} />
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
      }
    />
  )
}

SecTwo.propTypes = {
  article: T.shape({
    title: T.string,
    img: T.string,
  }),
}

SecTwo.defaultProps = {
  article: {},
}

export default SecTwo