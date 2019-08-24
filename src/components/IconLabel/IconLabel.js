import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import T from 'prop-types'

import { size12Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  cursor: pointer;

  & > div {
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

const IconLabel = ({
  onClick,
  icon,
  label,
  theme,
}) => {
  const handleClick = evt => {
    evt.preventDefault()

    if (onClick) {
      onClick(evt)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Stat onClick={handleClick}>
        { icon }

        {
          onClick
            ? (
              <a>
                { label }
              </a>
            )
            : (
              <div>
                { label }
              </div>
            )
        }
      </Stat>
    </ThemeProvider>
  )
}

IconLabel.propTypes = {
  onClick: T.oneOfType([
    T.func,
    T.oneOf([null]),
  ]),
  icon: T.element,
  label: T.oneOfType([
    T.oneOf([null]),
    T.node,
  ]),
  theme: T.object,
}

IconLabel.defaultProps = {
  onClick: null,
  icon: null,
  label: '',
  theme: defaultTheme,
}

export default IconLabel