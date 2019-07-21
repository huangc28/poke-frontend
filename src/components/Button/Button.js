import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
`

const Content = styled.div`
  display: flex;
`

const Icon = styled.div``

const Text = styled.div``

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

        <Text
          style={{
            justifyContent: children && 'right',
          }}
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
}

Button.defaultProps = {
  onClick: () => {},
  children: null,
  Text: '',
}

export default Button