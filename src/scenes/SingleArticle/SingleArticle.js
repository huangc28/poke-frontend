import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import T from 'prop-types'

import Main from '@poke/layouts/Main'
import ContactLayout from '@poke/layouts/ContactLayout'
import { size40Mixin } from '@poke/styles/font'
import { insetShadow } from '@poke/styles/shadow'
import colors from '@poke/styles/colors'
import IconStat from '@poke/components/IconStat'
import { RecentUpdatedDate, NumViews } from '@poke/components/Icons'
import TimeAgo from '@poke/components/TimeAgo'

import {
  fetchArticle,
  selectArticle,
} from './services/redux/singleArticle'
import dogBG from './images/dogBG.png'

const Content = styled.div`
  padding: 0 2.375rem 0;
`

const TopBanner = styled.div`
  ${insetShadow}
  background: url(${({ img }) => img}) no-repeat right top;
  background-size: cover;
  background-color: ${colors.white};
  width: 100%;
  height: 30rem ;
`

const TopicBar = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 2.75rem 0 3.875rem 0;
`

const Topic = styled.div`
  ${size40Mixin}
  display: flex;
  align-items: flex-start;
`

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

function SingleArticle ({ match, fetchArticle, article }) {
  const { params } = match
  const { articleID } = params

  useEffect(() => {
    fetchArticle(parseInt(articleID, 10))
  }, [ articleID ])

  return (
    <Main>
      <ContactLayout>
        <TopBanner
          img={article.img || dogBG}
        />

        <Content>
          <TopicBar>
            <Topic>
              { article.title }
            </Topic>
            <StatContainer>
              {/* created at */}
              <IconStat
                icon={
                  <RecentUpdatedDate
                    width={16}
                    height={16}
                  />
                }
                text={
                  <TimeAgo
                    time={article.updated_at}
                    toTimestamp
                  />
                }
              />

              {/* viewed */}
              <IconStat
                icon={
                  <NumViews
                    width={16}
                    height={16}
                  />
                }
                text={
                  <TimeAgo
                    time={article.updated_at}
                    toTimestamp
                  />
                }
              />
            </StatContainer>
          </TopicBar>

          <div dangerouslySetInnerHTML={{ __html: article.content }}/>
        </Content>
      </ContactLayout>
    </Main>
  )
}

SingleArticle.propTypes = {
  fetchArticle: T.func.isRequired,
}

SingleArticle.defaultProps = {
  article: {},
}

const mapStateToProps = state => ({
  article: selectArticle(state),
})

export default connect(mapStateToProps, {
  fetchArticle,
})(SingleArticle)