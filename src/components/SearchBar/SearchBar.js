import React, { useState } from 'react'
import styled from 'styled-components'
import SvgIcon from '@material-ui/core/SvgIcon'

const SearchBarContainer = styled.span`
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  height: 1.25rem;
`

const SearchBar = styled.input`
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

const MagnifyIcon = props => {
  return (
    <SvgIcon style={{ fontSize: 16 }} {...props}>
      <path fill="#ffffff" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </SvgIcon>
  )
}

export default ({ onKeyDown }) => {
  const [words, setText] = useState('')

  return (
    <SearchBarContainer>
      <IconContainer>
        <MagnifyIcon />
      </IconContainer>
      <SearchBar
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