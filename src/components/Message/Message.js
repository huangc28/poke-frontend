import React from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import $ from 'jquery'
import {FaTimes} from 'react-icons/fa'

const Container = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
    position: fixed;
    display: none;
    top: 0px;
    left: 30vw;
    z-index: 5;
    padding: 20px;
    border-radius: 20px;
    border: groove;
    width: 40vw;
    margin: 12vh auto;
    background-color: ${colors.white};
  }
`

const Close = styled.span`
  float: right;
`

export function flash_message(msg, toggleForm) {
    if (!!toggleForm) $(toggleForm).toggle()
    $('#flash_message > div').text(msg)
    $('#flash_message').toggle(true)
    setTimeout(function(){
        $('#flash_message').toggle(false)
    }, 3000)
}

export const Message = ({ msg }) => {
    return (
        <Container id="flash_message">
            <div style={{
                'max-width': '90%',
                'display': 'inline-flex',
                'word-wrap': 'break-word',
                'word-break': 'break-all',
            }}>{ msg }</div>
            <Close
              onClick = {evt => {
                $('#flash_message').toggle(false)
              }}
            ><FaTimes/></Close>
        </Container>
    )
}



