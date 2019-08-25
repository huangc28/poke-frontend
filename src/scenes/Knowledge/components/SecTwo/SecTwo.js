import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import { size14Mixin, size26Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'
import TopArticleLayout from '@poke/layouts/TopArticleLayout'
import IconLabel from '@poke/components/IconLabel'
import Img from '@poke/components/Img'
import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'
import TimeAgo from '@poke/components/TimeAgo'
import { DateWhite, PPWhite, More as MoreIcon } from '@poke/components/Icons'

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

function SecTwo ({ article, onClickArticle }) {
  const timestamp = article.updated_at
    ? convertDateTimeStringToTimestamp(article.updated_at)
    : Date.now()

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

          <IntroContainer
            onClick={onClickArticle}
          >
            <Img
              src={article.img}
              width={600}
              height={420}
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
            <IconLabel
              icon={
                <DateWhite
                  width={16}
                  height={16}
                />
              }
              label={<TimeAgo
                time={timestamp}
              />}
            />

            <IconLabel
              icon={
                <PPWhite
                  width={16}
                  height={16}
                />
              }
              label={article.visit}
            />
          </ArticleStat>

          <SummaryContent>
            <Summary>
              <div dangerouslySetInnerHTML={{ __html: article.descript }} />
            </Summary>

            <More>
              <IconLabel
                icon={
                  <MoreIcon
                    width={16}
                    height={16}
                  />
                }
                label='more'
                onClick={onClickArticle}
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
  onClickArticle: T.func,
}

SecTwo.defaultProps = {
  article: {},
  onClickArticle: () => {} ,
}

export default SecTwo