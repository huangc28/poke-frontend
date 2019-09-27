import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'
import $ from 'jquery'
import { FaSignInAlt, FaGoogle, FaFacebookF } from 'react-icons/fa'
import { flash_message } from '../../../Message/Message';

const LoginFormContainer = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
    position: fixed;
    display: none;
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background-color:rgba(100, 100, 100, 0.5);
  }
`


const Forms = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
    top: 0px;
    left: 0px;
    padding: 20px;
    border-radius: 20px;
    width: 450px;
    margin: 10vh auto;
    background-color: ${colors.white};
  }
`

const Button = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
    padding: 10px 30px;
    border-radius: 25px;
    margin: 5px;
    background-color: ${colors.prussianBlue};
    color: ${colors.white};
    cursor: pointer;
    
    & > * {
      color: ${colors.white};
      margin-left: 10px;
    }
  }
`
const Line = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
    padding: 10px;
    margin: 5px;
    background-color: ${colors.white};
    color: ${colors.prussianBlue};
    font-size: 14px;
    border: ${props => !!props.border? 'solid 1px #3c4e6b': 'none'};
    border-radius: ${props => !!props.border? '25px': '0px'};
    & > * {
      margin-left: 10px;
    }
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: rgba(0,0,0,0);
  text-align: center;
  &:focus {
    outline: 0px;
  }
`
function toggleForms(id){
  $('#LoginContainer form').each(function(i,e){
      if (e.id == id) e.style.display = 'block'
      else e.style.display = 'none'
  })
}



// const LoginForm = () => 
class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            login: typeof window != 'undefined' && localStorage.getItem('access_token'),
        }

        this.logIn = this.logIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.signUp = this.signUp.bind(this)
        this.verifyMail = this.verifyMail.bind(this)
        this.findPassword = this.findPassword.bind(this)
        this.findAcct = this.findAcct.bind(this)
    }

    logIn() {
        event.preventDefault()
        let acct = $('#logIn').find('input[name=acct]').val()
        let password = $('#logIn').find('input[name=password]').val()
        
        $.ajax({
          url: 'https://api.poke.love/user/login',
          method: 'post',
          data: { acct, password },
          success: function(data){
            this.setState({login: true})
            localStorage.setItem('access_token', data.access_token)
            flash_message('登入成功', true)
          }.bind(this),
          error: function(data){
            this.setState({login: false})
            localStorage.removeItem('access_token')
            flash_message(`登入失敗 ${data.msg}`, false)
          }.bind(this)
        })
    }

    logOut(event){
        event.preventDefault()
        let Authorization = localStorage.getItem('access_token')
        
        $.ajax({
            url: 'https://api.poke.love/user/logout',
            method: 'post',
            headers: { Authorization },
            success: function(data){
                this.setState({login: false})
                localStorage.removeItem('access_token')
                flash_message(`成功登出`, true)
            }.bind(this),
            error: function(data){
                this.setState({login: false})
                flash_message(`登出失敗, ${data.msg}`, false)
            }.bind(this)
        })
    }
    
    signUp(event){
        event.preventDefault()
        let acct = $('#signUp').find('input[name=acct]').val()
        let password = $('#signUp').find('input[name=password]').val()
        let email = $('#signUp').find('input[name=email]').val()
    
        $.ajax({
            url: 'https://api.poke.love/user',
            method: 'post',
            data: {acct, password, email},
            success: function(data){
                flash_message(`註冊成功, 請查收驗證信`, true)
            }.bind(this),
            error: function(data){
                flash_message(`註冊失敗, ${data.msg}`, false)
            }.bind(this)
        })
    }
    
    verifyMail(event) {
        event.preventDefault()
        let email = $('#verifyMail').find('input[name=email]').val()
      
        $.ajax({
          url: 'https://api.poke.love/user/mail/verify',
          method: 'post',
          data: { email },
          success: function(data){
            flash_message(`驗證信已發送至[${email}]`, true)
          }.bind(this),
          error: function(data){
            flash_message(`驗證信發送失敗, ${data.msg}`, false)
          }.bind(this)
        })
    }
    
    findPassword(event){
        event.preventDefault()
        let acct = $('#findPassword').find('input[name=acct]').val()
    
        $.ajax({
            url: 'https://api.poke.love/mail/password',
            method: 'post', 
            data: { acct },
            success: function(data){
                flash_message(`重設密碼信件已送至註冊信箱, 請查收`, true)
            }.bind(this),
            error: function(data){
                flash_message(`失敗, ${data.msg}`, false)
            }.bind(this)
        })
    }
    
    findAcct(event){
        event.preventDefault()
        let email = $('#findAcct').find('input[name=email]').val()
    
        $.ajax({
            url: 'https://api.poke.love/mail/acct',
            method: 'post',
            data: { email },
            success: function(data){
                flash_message(`登入帳號已發送至註冊信箱, 請查收`, true)
            }.bind(this),
            error: function(data){
                flash_message(`失敗, ${data.msg}`, false)
            }.bind(this)
        })
    }

    render () {
        if (this.state.login) {
            return (
                <LoginFormContainer id="LoginContainer"
                onClick={function(event){ if (event.target.id=='LoginContainer') $('#LoginContainer').toggle() }}
                >
                  <Forms>
                    <Line></Line>
                    <Button style={{ textAlign: 'center' }}>我的最愛</Button>
                    <Button style={{ textAlign: 'center' }}>資料變更</Button>
                    <Button style={{ textAlign: 'center' }} onClick={ this.logOut }>登出</Button>
                  </Forms>
                </LoginFormContainer>
            )
        }
        else {
            return (
                <LoginFormContainer id="LoginContainer" 
                onClick={function(event){ if (event.target.id=='LoginContainer') $('#LoginContainer').toggle() }}
                >
                  <Forms>
                    <form id="logIn">
                      <Line><FaSignInAlt></FaSignInAlt><span>登入</span></Line>
                      <Button><FaGoogle></FaGoogle><span>|</span><span>使用Gmail登入</span></Button>
                      <Button><FaFacebookF></FaFacebookF><span>|</span><span>使用facebook登入</span></Button>
                      
                      <Line>使用POKE帳號密碼登入</Line>
                      <Line border={true}><Input name="acct" placeholder="輸入帳號"/></Line>
                      <Line border={true}><Input name="password" type="password" placeholder="輸入密碼"/></Line>
                      <Button>
                        <Input type="submit" value="登入" onClick={ this.logIn } style={{ cursor: 'pointer' }}/>
                      </Button>
                    </form>
                    <form id="signUp" style={{ display: 'none' }}>
                      <Line>快速註冊</Line>
                      <Line>註冊即同意<a>使用者條款</a>及<a>隱私權政策</a></Line>
                      <Button><FaGoogle></FaGoogle><span>|</span><span>使用Gmail註冊</span></Button>
                      <Button><FaFacebookF></FaFacebookF><span>|</span><span>使用facebook註冊</span></Button>
                      <div style={{ position: 'relative', padding: '15px' }}>
                          <span style={{ 
                            position: 'absolute',
                            background: 'white',
                            padding: '5px',
                            left: 'calc(50% + -15px)',
                            top: '10px'
                            }}>或者</span>
                          <hr/>
                      </div>
                      <Line border={true}><Input name="acct" placeholder="帳號"/></Line>
                      <Line border={true}><Input name="email" type="email" placeholder="信箱"/></Line>
                      <Line border={true}><Input name="password" type="password" placeholder="密碼"/></Line>
                      <Line border={true}><Input name="password2" type="password" placeholder="再次確認密碼"/></Line>
                      <Button><Input type="submit" value="登入" onClick={ this.signUp }/></Button>
                    </form>
                    <form id="findPassword" style={{ display: 'none' }}>
                      <Line>找回密碼</Line>
                      <Line>請輸入當時註冊之帳號</Line>
                      <Line border={true}><Input name="acct" placeholder="輸入帳號"/></Line>
                      <Button><Input type="submit" value="確定送出" onClick={ this.findPassword }/></Button>
                    </form>
                    <form id="findAcct" style={{ display: 'none' }}>
                      <Line>找回帳號</Line>
                      <Line>請輸入當時註冊之信箱</Line>
                      <Line border={true}><Input name="email" placeholder="輸入信箱"/></Line>
                      <Button><Input type="submit" value="確定送出" onClick={ this.findAcct }/></Button>
                    </form>
                    <form id="verifyMail" style={{ display: 'none' }}>
                      <Line>重發認證信</Line>
                      <Line>請輸入當初註冊之信箱</Line>
                      <Line border={true}><Input name="email" type="email" placeholder="輸入信箱"/></Line>
                      <Button><Input type="submit" value="送出" onClick={ this.verifyMail } style={{ cursor: 'pointer' }}/></Button>
                    </form>
                    <hr style={{ margin: '15px' }}/>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('logIn')}>快速登入</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('signUp')}>快速註冊</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('findPassword')}>找回密碼</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('findAcct')}>找回帳號</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('verifyMail')}>重發認證信</Button>
                  </Forms>
                </LoginFormContainer>
            )
        }
    }
}

export default LoginForm