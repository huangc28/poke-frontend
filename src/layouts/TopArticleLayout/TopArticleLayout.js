import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'
import { size20Mixin } from '@poke/styles/font'

const Section = styled.section`
  background-color: ${colors.pickledBluewood};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.75rem 0;
`

const Left = styled.div`
  margin-right: 1.875rem;

  & > p {
    ${size20Mixin}
    color: ${colors.white};
    margin: 0;
  }
`

const Right = styled.div`
  width: 18.5625rem;
  padding-top: 4.5rem;
  display: flex;
  flex-direction: column;
`

const TopArticleLayout = ({ left, right }) => {
  return (
    <Section>
      <Left>
        { left }
      </Left>
      <Right>
        { right }
      </Right>
    </Section>
  )
}

TopArticleLayout.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
}

export default TopArticleLayout