import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
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
    color: ${props => props.theme.fontColor}
  }

  & > a {
    ${size12Mixin}
    text-decoration: none;
    margin: 0 0 0 0.25rem;
    color: ${props => props.theme.fontColor};
  }
`

const defaultTheme = {
  fontColor: colors.white,
}

export const blackTheme = {
  fontColor: colors.black,
}

const IconStat = ({
  onClick,
  icon,
  text,
  theme,
}) => {
  const handleClick = evt => {
    evt.preventDefault()
    onClick(evt)
  }

  console.log('text', text)

  return (
    <ThemeProvider theme={theme}>
      <Stat>
        { icon }

        {
          onClick
            ? (
              <p>
                { text }
              </p>
            )
            : (
              <a onClick={handleClick}>
                { text }
              </a>
            )
        }
      </Stat>
    </ThemeProvider>
  )
}

IconStat.propTypes = {
  onClick: PropTypes.oneOf([
    PropTypes.func,
    null,
  ]),
  icon: PropTypes.element,
  text: '',
  theme: PropTypes.object,
}

IconStat.defaultProps = {
  onClick: null,
  icon: null,
  text: '',
  theme: defaultTheme,
}

export default IconStat