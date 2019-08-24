import React from 'react'
import styled from 'styled-components'
import T from 'prop-types'

import colors from '@poke/styles/colors'
import compose from '@poke/util/compose'

import { size16 } from '@poke/styles/font'

const Content = styled.div`
  position: relative;
  float: left;
  cursor: pointer;
`

const Banner = compose(size16)(styled.div`
  position: absolute;
  right: 0;
  bottom: 3.0625rem;
  color: ${colors.white};
  background-color: ${colors.pickledBluewood};
  padding: 1rem 0.375rem 1rem 1rem;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  letter-spacing: 0.2rem;
`)

const LargeIntro = ({ bannerText, children, onClick }) => {
  return (
    <Content onClick={onClick}>
      { children }

      <Banner>
        { bannerText }
      </Banner>
      <div style={{ clear: 'both' }} />
    </Content>
  )
}

LargeIntro.propTypes = {
  bannerText: T.string,
  img: T.element,
  onClick: T.func,
}

LargeIntro.defaultProps = {
  bannerText: 'some intro text',
  children: null,
  onClick: () => {},
}

export default LargeIntro
