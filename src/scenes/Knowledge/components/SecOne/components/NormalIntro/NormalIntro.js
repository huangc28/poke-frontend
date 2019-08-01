import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'
import { size14 } from '@poke/styles/font'

const Content = styled.div`
  float: left;
  height: 12.5rem;
  overflow: hidden;
  position: relative;
`

const BottomBanner = size14(styled.div`
  position: absolute;
  bottom: 0%;
  right: 0%;
  background-color: ${colors.pickledBluewood};
  color: ${colors.white};
  padding: 0.4375rem 1.125rem 0.4375rem 0.9375rem;
  box-sizing: border-box;
  letter-spacing: 0.175rem;
`)

const NormalIntro = ({ children, bannerText }) => {
  return (
    <Content>
      { children }
      <BottomBanner>
        { bannerText }
      </BottomBanner>
      <div style={{ clear: 'both' }} />
    </Content>
  )
}

NormalIntro.propTypes = {
  children: PropTypes.element,
  bannerText: PropTypes.string,
}

NormalIntro.defaultProps = {
  bannerText: '必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸'
}

export default NormalIntro
