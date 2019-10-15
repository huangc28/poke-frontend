import React, { Component } from 'react'
import styled from 'styled-components'
import bgImg from './images/01.maimpic.png'
import colors from '@poke/styles/colors'
import $ from 'jquery'

const BackGroundDiv = styled.div`
  background: url(${bgImg}) no-repeat center top;
  background-size: 100%;
  width: 100%;
  height: 45rem;
  position: relative;
`

const Hint = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.35);
  right: 40px;
  bottom: 100px;
  padding: 20px;
  color: ${colors.prussianBlue};
`

const HintTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
`

const HintContent = styled.div`
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 1.4px;
`

const HintBtn = styled.div`
  border-radius: 15px;
  background-color: #3c4e6b;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  color: ${colors.white};
  padding: 10px 5px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`

export default class FilterSecOne extends Component {
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
            <BackGroundDiv>
                {
                    this.state.notLogIn && 
                    <Hint>
                        <HintTitle>登入會員</HintTitle>
                        <hr style={{border: '1px solid'}} />
                        <HintContent>
                            ●登入可想更多功能<br/>
                            ●可增加四個選項，細選更適合的商品<br/>
                            ●收到最新文章通知<br/>
                        </HintContent>
                        <div style={{ display: 'flex' }}>
                            <HintBtn onClick={evt => {$('#LoginContainer').toggle()}}>
                                立即登入
                            </HintBtn>
                        </div>
                    </Hint>
                }
            </BackGroundDiv>
        )
    }
}