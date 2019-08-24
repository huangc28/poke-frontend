import React from 'react'
import styled from 'styled-components'
import T from 'prop-types'

import colors from '@poke/styles/colors'
import { size26Mixin, size48Mixin } from '@poke/styles/font'
import IconLabel, { blackTheme } from '@poke/components/IconLabel'
import TimeAgo from '@poke/components/TimeAgo'
import { RecentUpdatedDate, NumViews, More } from '@poke/components/Icons'
import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'

const Grid = styled.div`
  display: flex;
  width: 100%;
`

const Left = styled.div`
  display: flex;
  margin-right: 2.6875rem;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const TopicContainer = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: solid 2px ${colors.fiord};
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
`

const ArticleTag = styled.div`
  ${size48Mixin}
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pickledBluewood};
  color: ${colors.white};
  border-radius: 0.75rem;
  margin-right: 1.25rem;
`

const Title = styled.div`
  ${size26Mixin}
  margin: 0;
  display: flex;
  align-items: flex-end;
`

const Summary = styled.p`
  margin: 0;
  line-height: 1.57;
  letter-spacing: 0.175rem;
`

const StatBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 1.5rem;
`

const ArticleGrid = ({
  img,
  tagNum,
  title,
  summary,
  timeAgo,
  numViewed,
  onClickMore,
}) => {
  return (
    <Grid>
      {/* Article head image */}
      <Left>
        { img }
      </Left>

      {/* Article Intro */}
      <Right>
        <div>
          <TopicContainer>
            <ArticleTag>
              { tagNum }
            </ArticleTag>

            <Title>
              { title }
            </Title>
          </TopicContainer>

          <Summary>
            { summary }
          </Summary>
        </div>

        <div>
          <StatBar>
            <IconLabel
              theme={blackTheme}
              icon={<RecentUpdatedDate width={16} height={16} />}
              label={
                <TimeAgo
                  time={
                    timeAgo
                      ? convertDateTimeStringToTimestamp(timeAgo)
                      : Date.now()
                  }
                />
              }
            />

            <IconLabel
              theme={blackTheme}
              icon={<NumViews width={16} height={16} />}
              text={`${numViewed}`}
            />

            <IconLabel
              theme={blackTheme}
              icon={<More width={16} height={16} />}
              text='more'
              onClick={onClickMore}
            />
          </StatBar>
        </div>
      </Right>
    </Grid>
  )
}

ArticleGrid.propTypes = {
  img: T.element,
  tagNum: T.number,
  title: T.string,
  summary: T.string,
  timeAgo: T.string,
  numViewed: T.number,
  onClickMore: T.func,
}

ArticleGrid.defaultProps = {
  img: <img src='https://via.placeholder.com/300x200'/>,
  title: '',
  summary: '',
  timeAgo: '',
  numViewed: 0,
  onClickMore: () => {},
}

export default ArticleGrid
