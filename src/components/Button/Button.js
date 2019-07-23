import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

const sizeMap = {
  height: {
    normal: 3.4375,
    small: 1.6875,
  },
}

const themes = {
  black: {
    backgroundColor: colors.black,
    color: colors.white,
  },
  pink: {
    backgroundColor: colors.tickleMePink,
    color: colors.white,
  }
}

const StyledButton = styled.button`
  color: white;
  width: auto;
  height: ${props => props.height}rem;
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

const Text = styled.span`
  font-size: 20px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: ${props => props.color};
`
const Button = ({
  onClick,
  children,
  text,
  size,
  theme,
}) => {
  const buttonHeight = sizeMap.height[size] || sizeMap.height['normal']
  const stheme = themes[theme] || themes['pink']

  return (
    <StyledButton
      onClick={onClick}
      height={buttonHeight}
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
}

Button.defaultProps = {
  onClick: () => {},
  children: null,
  Text: '',
  size: 'normal',
  theme: 'pink',
}

export default Button