import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import colors from '@poke/styles/colors'
import $ from 'jquery'
import { FaSignInAlt, FaGoogle, FaFacebookF } from 'react-icons/fa'
import { flash_message } from '../../../Message/Message';
import Img from '@poke/components/Img'

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

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  & > a {
    text-decoration: none;
    color: ${colors.gray};
  }
`

function toggleForms(id){
  $('#LoginContainer form').each(function(i,e){
      if (e.id == id) e.style.display = 'block'
      else e.style.display = 'none'
  })
}

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            login: typeof window != 'undefined' && localStorage.getItem('access_token'),
            way: typeof window != 'undefined' && localStorage.getItem('login_way'),
            user: {
                name: typeof window != 'undefined' && localStorage.getItem('user_name')
            },
        }

        this.logStateHandler = this.logStateHandler.bind(this)
        this.logIn = this.logIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.signUp = this.signUp.bind(this)
        this.verifyMail = this.verifyMail.bind(this)
        this.findPassword = this.findPassword.bind(this)
        this.findAcct = this.findAcct.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    componentDidMount() {
        // 透過原生addEventListener讓其他物件也可以發送更新畫面的事件
        if (typeof window !== 'undefined') {
            // 註冊監聽事件
            document.addEventListener('logState', this.logStateHandler)

            // 每小時更新 access_token
            this.refreshToken()
            setInterval(function(){
                this.refreshToken()
            }.bind(this), 18000) 
        }
    }

    // localStorage的賦值, 並發送logState事件以更新畫面
    emitSetLogState({ ...items }) {
        Object.entries(items).map(
            ([key, value]) => { localStorage.setItem(key, value) }
        )
        
        event = new Event('logState');
        document.dispatchEvent(event)
    }
    // localStorage的刪除, 並發送logState事件以更新畫面
    emitRemoveLogState(list) {
        list.forEach(function(key){
            localStorage.removeItem(key)
        })

        event = new Event('logState');
        document.dispatchEvent(event)
    }

    // 更新state, 同時會自動更新畫面
    logStateHandler(event) {
        this.setState({
            login: typeof window != 'undefined' && localStorage.getItem('access_token'),
            way: typeof window != 'undefined' && localStorage.getItem('login_way'),
            user: {
                name: typeof window != 'undefined' && localStorage.getItem('user_name')
            },
        })
    }

    refreshToken() {
        if (!!localStorage.getItem('refresh_token')) {
            $.ajax({
                url: 'https://api.poke.love/user/refresh',
                method: 'get',
                headers: {
                    Authorization: localStorage.getItem('refresh_token')
                },
                success: function(data){
                    this.emitSetLogState({
                        access_token: data.access_token,
                    })
                }.bind(this),
                error: function(){
                    this.emitRemoveLogState([
                        access_token,
                        refresh_token,
                        user_name,
                        way,
                    ])
                }.bind(this)
            })
        }
    }

    logIn({way, acct, password}) {
        event.preventDefault()
        
        $.ajax({
          url: 'https://api.poke.love/user/login',
          method: 'post',
          data: { acct, password },
          success: function(data){
            this.emitSetLogState({
                access_token: data.access_token,
                refresh_token: data.refresh_token,
                login_way: way,
                user_name: data.user.name
            })
            flash_message('登入成功', true)
          }.bind(this),
          error: function(data){
            this.emitRemoveLogState([
                'access_token',
                'login_way',
                'user_name'
            ])
            flash_message(`登入失敗 ${data.msg}`, false)
          }.bind(this),
          complete: function(){
            // console.log(this.state)
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
                this.emitRemoveLogState([
                    'access_token',
                    'login_way',
                    'user_name'
                ])
                flash_message(`成功登出`, true)
            }.bind(this),
            error: function(data){
                this.emitRemoveLogState([
                    'access_token',
                    'login_way',
                    'user_name'
                ])
                flash_message(`登出成功`, true)
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

    getUser(){
        if (this.state.way == 'google') {
            return {
                name: this.state.google_name,
            }
        }
        else if (this.state.way == 'facebook') {
            return {
                name: this.state.facebook_name
            }
        }
        else {
            return {
                name: this.state.user.name
            }
        }
    }

    enterKeyPress(event, func) {
        if ( (event.keyCode ? event.keyCode : event.which) == 13) {
            event.preventDefault()
            if (!!func) {
                func()
            }
        }
    }

    render () {
        if (this.state.login) {
            let user = this.getUser()

            return (
                <LoginContainer>
                <Link
                onClick={evt => {
                    evt.preventDefault()
                    $('#LoginContainer').toggle()
                  }}
                >
                { user.name }
                </Link>
                <LoginFormContainer id="LoginContainer"
                onClick={function(event){ if (event.target.id=='LoginContainer') $('#LoginContainer').toggle() }}
                >
                  <Forms>
                    <Line></Line>
                    <Button style={{ textAlign: 'center' }}>我的最愛</Button>
                    <Button 
                      style={{ textAlign: 'center' }}
                      onClick={evt=>{location.href = 'user'}}
                    >
                    資料變更</Button>
                    <Button style={{ textAlign: 'center' }} onClick={ this.logOut }>登出</Button>
                  </Forms>
                </LoginFormContainer>
                </LoginContainer>
            )
        }
        else {
            return (
                <LoginContainer>
                <Link onClick={evt => {
                          evt.preventDefault()
                          $('#LoginContainer').toggle()
                      }}
                >
                Login
                </Link>
                <LoginFormContainer id="LoginContainer" 
                onClick={function(event){ if (event.target.id=='LoginContainer') $('#LoginContainer').toggle() }}
                >
                  <Forms>
                    <form id="logIn">
                      <Line><FaSignInAlt></FaSignInAlt><span>登入</span></Line>
                      <Button><FaGoogle></FaGoogle><span>|</span><span>使用Gmail登入</span></Button>
                      <Button><FaFacebookF></FaFacebookF><span>|</span><span>使用facebook登入</span></Button>
                      
                      <Line>使用POKE帳號密碼登入</Line>
                      <Line border={true}><Input name="acct" placeholder="輸入帳號" onKeyPress={evt => this.enterKeyPress(evt, false)}/></Line>
                      <Line border={true}><Input name="password" type="password" placeholder="輸入密碼" onKeyPress={evt => this.enterKeyPress(evt, 
                            function() { $('#logIn div[name=submit]').click() }
                            )}/></Line>
                      <Button>
                        <div name="submit" onClick={ evt => this.logIn({
                            way:'poke',
                            acct: $('#logIn input[name=acct]').val(),
                            password: $('#logIn input[name=password]').val(),
                            }) 
                            } style={{ cursor: 'pointer', textAlign: 'center' }}>登入</div>
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
                      <Line border={true}><Input name="acct" placeholder="帳號" onKeyPress={evt => this.enterKeyPress(evt, false)}/></Line>
                      <Line border={true}><Input name="email" type="email" placeholder="信箱" onKeyPress={evt => this.enterKeyPress(evt, false)}/></Line>
                      <Line border={true}><Input name="password" type="password" placeholder="密碼" onKeyPress={evt => this.enterKeyPress(evt, false)}/></Line>
                      <Line border={true}><Input name="password2" type="password" placeholder="再次確認密碼" onKeyPress={evt => this.enterKeyPress(evt, 
                            function() { $('#signUp div[name=submit]').click() }
                            )}/></Line>
                      <Button><div name="submit" onClick={ this.signUp } style={{cursor: 'pointer', textAlign: 'center'}}>快速註冊</div></Button>
                    </form>
                    
                    <form id="findPassword" style={{ display: 'none' }}>
                      <Line>找回密碼</Line>
                      <Line>請輸入當時註冊之帳號</Line>
                      <Line border={true}><Input name="acct" placeholder="輸入帳號" onKeyPress={evt => this.enterKeyPress(evt, 
                        function() { $('#findPassword div[name=submit]').click() }
                        )}/></Line>
                      <Button><div name="submit" onClick={ this.findPassword } style={{ cursor: 'pointer', textAlign: "center" }}>確定送出</div></Button>
                    </form>

                    <form id="findAcct" style={{ display: 'none' }}>
                      <Line>找回帳號</Line>
                      <Line>請輸入當時註冊之信箱</Line>
                      <Line border={true}><Input name="email" placeholder="輸入信箱" onKeyPress={evt => this.enterKeyPress(evt, 
                        function() { $('#findAcct div[name=submit]').click() }
                        )}/></Line>
                      <Button><div name="submit" onClick={ this.findAcct } style={{ cursor: 'pointer', textAlign: "center" }}>確定送出</div></Button>
                    </form>

                    <form id="verifyMail" style={{ display: 'none' }}>
                      <Line>重發認證信</Line>
                      <Line>請輸入當初註冊之信箱</Line>
                      <Line border={true}><Input name="email" type="email" placeholder="輸入信箱" onKeyPress={evt => this.enterKeyPress(evt, 
                        function() { $('#verifyMail div[name=submit]').click() }
                        )}/></Line>
                      <Button><div name="submit" onClick={ this.verifyMail } style={{ cursor: 'pointer', textAlign: "center" }}>送出</div></Button>
                    </form>

                    <hr style={{ margin: '15px' }}/>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('logIn')}>快速登入</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('signUp')}>快速註冊</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('findPassword')}>找回密碼</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('findAcct')}>找回帳號</Button>
                    <Button style={{ textAlign: 'center' }} onClick={evt => toggleForms('verifyMail')}>重發認證信</Button>
                  </Forms>
                </LoginFormContainer>
            </LoginContainer>
            )
        }
    }
}

export default LoginForm