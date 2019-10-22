import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import { FaFileSignature, FaHeart } from 'react-icons/fa';

const Container = styled.div`
  width: 220px;
  height: 40px;
  border-radius: 17.5px;
  background-color: ${colors.prussianBlue};
  padding-left: 20px;
  padding-top: 10px;
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.2px;
  display: flex;
  margin: 10px;
`

const Word = styled.div`
  align-self: auto;
  padding-left: 10px;
`


export default class FunctionBtn extends Component {
    render() {
        let fa = this.props.fa=='heart' 
        ? <FaHeart style={{ fontSize: '20pt' }}/>
        : <FaFileSignature style={{ fontSize: '20pt' }}/>
        return (
            <Container>
                { fa }
                <Word>{this.props.word}</Word>
            </Container>
        )
    }
}