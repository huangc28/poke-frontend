import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import T from 'prop-types'

import Main from '@poke/layouts/Main'
import ContactLayout from '@poke/layouts/ContactLayout'
import { size40Mixin } from '@poke/styles/font'
import { insetShadow } from '@poke/styles/shadow'
import colors from '@poke/styles/colors'
import IconLabel, { blackTheme } from '@poke/components/IconLabel'
import { RecentUpdatedDate, NumViews } from '@poke/components/Icons'
import TimeAgo from '@poke/components/TimeAgo'
import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'

import {
  fetchArticle,
  selectArticle,
} from './services/redux/singleArticle'
import defaultBanner from './images/default_banner.png'

const Content = styled.div`
  padding: 0 2.375rem 2.5rem;
`

const TopBanner = styled.div`
  ${insetShadow}
  background: url(${({ img }) => img}) no-repeat right top;
  background-size: cover;
  background-color: ${colors.white};
  width: 100%;
  min-height: 30rem ;
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
  }, [])

  return (
    <Main>
      <ContactLayout>
        <TopBanner
          img={article.img || defaultBanner}
        />

        <Content>
          <TopicBar>
            <Topic>
              { article.title }
            </Topic>
            <StatContainer>
              {/* created at */}
              <IconLabel
                theme={blackTheme}
                cursor='default'
                icon={
                  <RecentUpdatedDate
                    width={16}
                    height={16}
                  />
                }
                label={
                  <TimeAgo
                    time={
                      article.updated_at
                        ? convertDateTimeStringToTimestamp(article.updated_at)
                        : Date.now()
                    }
                  />
                }
              />

              {/* viewed */}
              <IconLabel
                theme={blackTheme}
                icon={
                  <NumViews
                    width={16}
                    height={16}
                  />
                }
                label={article.visit}
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