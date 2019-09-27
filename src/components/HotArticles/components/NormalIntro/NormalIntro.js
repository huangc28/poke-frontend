import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'
import { size14Mixin } from '@poke/styles/font'

const Content = styled.div`
  float: left;
  height: 12.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 45%;
  padding: 10px;
`

const BottomBanner = styled.div`
  ${size14Mixin}
  position: absolute;
  width: 100%;
  bottom: 0%;
  right: 0%;
  background-color: ${colors.pickledBluewood};
  color: ${colors.white};
  padding: 0.4375rem 1.125rem 0.4375rem 0.9375rem;
  box-sizing: border-box;
  letter-spacing: 0.175rem;
  line-height: 1.29;
  text-align: center;
`

const NormalIntro = ({ children, bannerText, onClick }) => (
  <Content onClick={onClick}>
    { children }
    <BottomBanner>
      { bannerText }
    </BottomBanner>
    <div style={{ clear: 'both' }} />
  </Content>
)

NormalIntro.propTypes = {
  children: T.element,
  bannerText: T.string,
  onClick: T.func,
}

NormalIntro.defaultProps = {
  bannerText: '',
  children: null,
}

export default NormalIntro
