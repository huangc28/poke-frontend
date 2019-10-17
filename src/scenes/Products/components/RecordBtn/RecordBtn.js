import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import { FaFileSignature } from 'react-icons/fa';

const Container = styled.div`
  width: 160px;
  height: 35px;
  border-radius: 17.5px;
  background-color: ${colors.prussianBlue};
  padding-left: 20px;
  padding-top: 5px;
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.7px;
  display: flex;
  margin-left: 20px;
`

const Word = styled.div`
  align-self: center;
  padding-left: 10px;
`


export default class RecordBtn extends Component {
    render() {
        return (
            <Container>
                <FaFileSignature style={{ fontSize: '20pt' }}/>
                <Word>加入篩選紀錄</Word>
            </Container>
        )
    }
}