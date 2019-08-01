import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import colors from '@poke/styles/colors'
import compose from '@poke/util/compose'

import { size16 } from '@poke/styles/font'

const Content = styled.div`
  position: relative;
  float: left;
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

const LargeIntro = ({ bannerText, img }) => {
  return (
    <Content>
      { img }

      <Banner>
        { bannerText }
      </Banner>
      <div style={{ clear: 'both' }} />
    </Content>
  )
}

LargeIntro.PropTypes = {
  bannerText: PropTypes.string,
  img: PropTypes.element,
}

LargeIntro.defaultProps = { bannerText: 'some intro text',
  img: <img src='https://via.placeholder.com/600x420' />,
}

export default LargeIntro
