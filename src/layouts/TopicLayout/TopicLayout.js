import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { size26Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'

const Layout = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
`

const TopicContainer = styled.div`
  ${size26Mixin}
  border-bottom: solid 2px ${colors.fiord};
  padding-bottom: 1rem;
  margin-bottom: 1.375rem;
`

const TopicLayout = ({ children, topic }) => {
  return (
    <Layout>
      <TopicContainer>
        { topic }
      </TopicContainer>
      <div>
        { children }
      </div>
    </Layout>
  )
}

TopicLayout.propTypes = {
  children: PropTypes.node,
  topic: PropTypes.string,
}

TopicLayout.defaultProps = {
  topic: '',
}

export default TopicLayout
