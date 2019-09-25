import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'
import $ from 'jquery'
import { FaSignInAlt, FaGoogle, FaFacebookF } from 'react-icons/fa';

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

function logIn(event) {
  event.preventDefault()
  
  $.ajax({
    url: 'https://api.poke.love/user/login',
    method: 'post',
    data: {
      acct: $('#logIn').find('input[name=acct]').val(),
      password: $('#logIn').find('input[name=password]').val(),
    }
  })
  .done(function(data){
    localStorage.setItem('access_token', data.access_token)
  })
  .fail(function(data){
    console.log(data)
  })
}

function verifyMail(event) {
    event.preventDefault()
  
    $.ajax({
      url: 'https://api.poke.love/user/mail/verify',
      method: 'post',
      data: {
        email: $('#verifyMail').find('input[name=email]').val()
      }
    })
    .done(function(data){
      console.log(data)
    })
    .fail(function(data){
      console.log(data)
    })
}

function signUp(event){

}

const LoginForm = () => {
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
              <Button><Input type="submit" value="登入" onClick={evt => logIn(evt)} style={{ cursor: 'pointer' }}/></Button>
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
              <Button><Input type="submit" value="登入" onClick={evt => {signUp(evt)}}/></Button>
            </form>
            <form id="findPassword" style={{ display: 'none' }}>
              <Line>找回密碼</Line>
              <Line>請輸入當時註冊之帳號</Line>
              <Line border={true}><Input name="acct" placeholder="輸入帳號"/></Line>
              <Button><Input type="submit" value="確定送出" /></Button>
            </form>
            <form id="findAcct" style={{ display: 'none' }}>
              <Line>找回帳號</Line>
              <Line>請輸入當時註冊之信箱</Line>
              <Line border={true}><Input name="email" placeholder="輸入信箱"/></Line>
              <Button><Input type="submit" value="確定送出" /></Button>
            </form>
            <form id="verifyMail" style={{ display: 'none' }}>
              <Line>重發認證信</Line>
              <Line>請輸入當初註冊之信箱</Line>
              <Line border={true}><Input name="email" type="email" placeholder="輸入信箱"/></Line>
              <Button><Input type="submit" value="送出" onClick={evt => verifyMail(evt)} style={{ cursor: 'pointer' }}/></Button>
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

export default LoginForm