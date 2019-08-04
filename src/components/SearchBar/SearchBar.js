import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Magnifier from '@material-ui/icons/Search'

import colors from '@poke/styles/colors'

const SearchBarContainer = styled.span`
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  height: 1.25rem;
`

const SearchBarInput = styled.input`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: ${props => props.hasIcon ? 0 : '0.5rem' };
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: ${props => props.hasIcon ? 0 : '0.5rem' };
  padding-left: ${props => props.hasIcon ? 0 : '0.875rem' };
  outline: none;
  border: none;
  width: 100%;
  background-color: ${colors.silverSand};
  color: ${colors.white};
  caret-color: ${colors.black};
  ::placeholder {
    color: ${colors.white};
  }
`

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: ${colors.silverSand};
  padding-left: 0.125rem;
`

const SearchBar = ({ icon, onKeyDown, ...props }) => {
  const [words, setText] = useState('')

  return (
    <SearchBarContainer>
      {
        icon && (
          <IconContainer>
            <Magnifier />
          </IconContainer>
        )
      }
      <SearchBarInput
        {...props}
        hasIcon={!!icon}
        type='text'
        onChange={evt => setText(evt.target.value)}
        onKeyDown={
          e => {
            if(e.key === 'Enter') {
              onKeyDown(words)
            }
          }
        }
        value={words}
      />
    </SearchBarContainer>
  )
}

SearchBar.propTypes = {
  onKeyDown: PropTypes.func,
  icon: PropTypes.element,
}

SearchBar.defaultProps = {
  onKeyDown: () => {},
}

export default SearchBar