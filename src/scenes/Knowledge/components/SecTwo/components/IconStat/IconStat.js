import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { size12Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  & > p {
    ${size12Mixin}
    margin: 0 0 0 0.25rem;
    color: ${colors.white}
  }
`
const IconStat = ({ onClick, icon, text }) => {
  return (
    <Stat>
      { icon }

      <p>
        2days
      </p>
    </Stat>
  )
}

IconStat.propTypes = {
  onClick: PropTypes.function,
  icon: PropTypes.element,
  text: '',
}

IconStat.defaultProps = {
  onClick: () => {},
  icon: null,
  text: '',
}

export default IconStat