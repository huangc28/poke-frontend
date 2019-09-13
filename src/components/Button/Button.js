import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import compose from '@poke/util/compose'
import colors from '@poke/styles/colors'
import { size20 } from '@poke/styles/font'

const sizeMap = {
  height: {
    normal: '3.4375rem',
    small: '1.6875rem',
    block: '35px',
  },
  width: {
    normal: 'auto',
    small: 'auto',
    block: '100%',
  }
}

const themes = {
  black: {
    backgroundColor: colors.black,
    color: colors.white,
  },
  pink: {
    backgroundColor: colors.tickleMePink,
    color: colors.white,
  },
  gray: {
    backgroundColor: colors.gray,
    color: colors.white,
  }
}

const StyledButton = styled.button`
  color: white;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 1rem;
  background: ${props => props.backgroundColor};
  border: 0;
  line-height: normal;
  overflow: hidden;
  padding: 0 1rem;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
  &:focus {
    outline: none;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  margin-right: 0.625rem;
  display: flex;
  align-items: center;
`

const Text = compose(size20)(styled.span`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  font-size: ${(props => props.fontSize)}
`)

const Button = ({
  onClick,
  children,
  text,
  size,
  theme,
  fontSize,
}) => {
  const buttonHeight = sizeMap.height[size] || sizeMap.height['normal']
  const buttonWidth = sizeMap.width[size] || sizeMap.width['normal']
  const stheme = themes[theme] || themes['pink']

  return (
    <StyledButton
      onClick={onClick}
      height={buttonHeight}
      width={buttonWidth}
      backgroundColor={stheme.backgroundColor}
    >
      <Content>
        {
          children && (
            <Icon>
              { children }
            </Icon>
          )
        }
        <Text
          color={stheme.color}
          fontSize={fontSize}
        >
          {text}
        </Text>
      </Content>
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
  text: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  fontSize: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  children: null,
  Text: '',
  size: 'normal',
  theme: 'pink',
  fontSize: '1.25rem',
}

export default Button