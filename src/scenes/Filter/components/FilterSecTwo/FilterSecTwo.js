import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import { FaPlus } from 'react-icons/fa';
import $ from 'jquery'

const Container = styled.div`
  width: 80vw;
  margin: 0px auto 1.5rem auto;
`

const MainTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  color: ${colors.prussianBlue};
`
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 1.4px;
  color: ${colors.prussianBlue};
  position: relative;
  & > div {
      position: absolute;
      bottom: 0px;
      width: max-content;
  }
`

const Line = styled.div`
  display: flex;
  margin-top: 1.5rem;
  position: relative;
  transition: height 1s;
`

const Clicker = styled.div`
  width: 150px;
  height: 60px;
  border-radius: 20px;
  background-color: ${colors.iron};
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 60px;
  color: ${colors.prussianBlue};
  margin-right: 40px;
`

export default class FilterSecTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notLogIn: typeof window != 'undefined' && !localStorage.getItem('access_token')
        }
        this.logStateHandler = this.logStateHandler.bind(this)
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.addEventListener('logState', this.logStateHandler)
        }
    }

    logStateHandler() {
        this.setState({
            notLogIn: typeof window != 'undefined' && !localStorage.getItem('access_token')
        })
    }

    render() {
        return (
            <Container>
                <div style={{ display: 'flex', marginTop: 80 }}>
                    <MainTitle>寵物</MainTitle>
                    <SubTitle><div>(必填)</div></SubTitle>
                </div>
                <hr style={{ border: 'solid 1px' }} />
                <Line>
                    <Clicker>貓</Clicker>
                    <Clicker>狗</Clicker>
                </Line>
                <Line>
                    <Clicker>幼犬</Clicker>
                    <Clicker>成犬</Clicker>
                    <Clicker>熟齡犬</Clicker>
                    <Clicker>小型犬</Clicker>
                    <Clicker>懷孕母犬</Clicker>
                </Line>
                <div style={{ display: 'flex', marginTop: 80 }}>
                    <MainTitle>商品需求</MainTitle>
                    <SubTitle><div>(選填)</div></SubTitle>
                </div>
                <hr style={{ border: 'solid 1px' }} />
                <Line>
                    <Clicker>無穀</Clicker>
                    <Clicker>非基改</Clicker>
                    <Clicker>抗老化</Clicker>
                    <Clicker>不含抗生素</Clicker>
                    <Clicker>不含副產品</Clicker>
                    <FaPlus 
                      style={{ fontSize: '3rem', padding: 5, backgroundColor: colors.iron, color: colors.prussianBlue, borderRadius: 99999, position: 'absolute', right: 0 }}
                      onClick={evt => {
                          if (document.getElementById('sec').style.height == '0px') document.getElementById('sec').style.height = '60px'
                          else document.getElementById('sec').style.height = '0px'
                      }}
                    />
                </Line>
                <Line id="sec" style={{height: 0, overflow: 'hidden'}}>
                    <Clicker>體重控制</Clicker>
                    <Clicker>腸胃保健</Clicker>
                    <Clicker>皮毛保健</Clicker>
                    <Clicker>關節保健</Clicker>
                    <Clicker>增加免疫力</Clicker>
                </Line>
            </Container>
        )
    }
}