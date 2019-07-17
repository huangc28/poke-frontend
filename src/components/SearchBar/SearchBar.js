import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MagnifyIcon } from '../Icons'

const SearchBarContainer = styled.span`
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  height: 1.25rem;
`

const SearchBarInput = styled.input`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  outline: none;
  border: none;
  background-color: #c5c6c7;
  color: #fff;
  caret-color: #000;
  ::placeholder {
    color: #fff;
  }
`

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: #c5c6c7;
  padding-left: 0.125rem;
`

const SearchBar = ({ onKeyDown }) => {
  const [words, setText] = useState('')

  return (
    <SearchBarContainer>
      <IconContainer>
        <MagnifyIcon />
      </IconContainer>
      <SearchBarInput
        type='text'
        placeholder='SEARCH'
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
}

SearchBar.defaultProps = {
  onKeyDown: () => {},
}

export default SearchBar