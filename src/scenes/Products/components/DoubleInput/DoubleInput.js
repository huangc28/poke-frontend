import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import { FaFileSignature } from 'react-icons/fa';

const Container = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
`

const LeftSelect = styled.select`
  width: 150px;
  height: 35px;
  border-radius: 17.5px 0px 0px 17.5px;
  background-color: ${colors.grey};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.9px;
  color: ${colors.prussianBlue};
  padding: 5px;
  -webkit-appearance: none;
`
const RightSelect = styled.select`
  width: 100px;
  height: 35px;
  border-radius: 0px 17.5px 17.5px 0px;
  background-color: ${colors.prussianBlue};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.9px;
  color: ${colors.white};
  padding: 5px;
`


export default class DoubleInput extends Component {
    render() {
        return (
            <Container>
                <LeftSelect name="sort" onChange={this.props.onChange}>
                    { this.props.options1 }
                </LeftSelect>
                <RightSelect name="desc" onChange={this.props.onChange}>
                    { this.props.options2 }
                </RightSelect>
            </Container>
        )
    }
}