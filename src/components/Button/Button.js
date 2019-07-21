import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  width: auto;
  height: 3.4375rem;
  border-radius: 1rem;
  background: #ff7aa8;
  border: 0;
  line-height: normal;
  overflow: hidden;
  padding: 0 1rem 0 1rem;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
  &.focus {
    outline: none;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  margin-right: 0.625rem;
`

const Text = styled.span`
  font-size: 20px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`

const Button = ({ onClick, children, text }) => {
  return (
    <StyledButton
      onClick={onClick}
    >
      <Content>
        {
          children && (
            <Icon>
              { children }
            </Icon>
          )
        }

        <Text>
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
}

Button.defaultProps = {
  onClick: () => {},
  children: null,
  Text: '',
}

export default Button