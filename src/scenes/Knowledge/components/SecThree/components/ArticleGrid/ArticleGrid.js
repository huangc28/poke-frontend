import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Account from '@material-ui/icons/Person'

import colors from '@poke/styles/colors'
import { size26Mixin, size48Mixin } from '@poke/styles/font'

import IconStat, { blackTheme } from '../../../IconStat'

const Grid = styled.div`
  display: flex;
`

const Left = styled.div`
  display: flex;
  margin-right: 2.6875rem;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 32.5rem;
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

        <StatBar>
          <IconStat
            theme={blackTheme}
            icon={<Account fontSize='small' />}
            text={timeAgo}
          />

          <IconStat
            theme={blackTheme}
            icon={<Account fontSize='small' />}
            text={`${numViewed}`}
          />

          <IconStat
            theme={blackTheme}
            icon={<Account fontSize='small' />}
            text='more'
            onClick={onClickMore}
          />
        </StatBar>
      </Right>
    </Grid>
  )
}

ArticleGrid.propTypes = {
  img: PropTypes.element,
  tagNum: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  timeAgo: PropTypes.string,
  numViewed: PropTypes.number,
  onClickMore: PropTypes.func,
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
