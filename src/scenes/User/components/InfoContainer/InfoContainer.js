import React, { Component } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { FaPlus, FaGooglePlus, FaFacebook } from 'react-icons/fa';
import { flash_message } from '@poke/components/Message';
import { buildApiUrl } from '@poke/services/apis/util'

const Container = styled.div`
  margin-top: 4rem;
`
const UpContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 60vw;
  margin: auto;
`

const DownContainer = styled.div`
  width: 60vw;
  margin: 60px auto;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
      margin: 20px;
  }
`

const PetInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: groove;
  border-radius: 20px;
  padding: 40px;
  margin-left: 20px;
`

const Info = styled.div`
  border-top: solid 1px;
`

const NewPet = styled.div`
  border-radius: 9999px;
  width: 150px;
  height: 150px;
  background-color: gray;
  color: white;
  cursor: pointer;
`

const Line = styled.div`
  border-bottom: solid 1px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  display: flex;

  & > * {
      margin-right: 20px;
      margin-left: 20px;
  }
`

const DarkRedButton = styled.div`
  width: 20%;
  padding: 10px 30px;
  background-color: brown;
  border-radius: 20px;
  color: white;
  align-self: center;
  cursor: pointer;
`

export class InfoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
        }

        this.setFormUserInfo = this.setFormUserInfo.bind(this)
        this.getUser = this.getUser.bind(this)
        this.changeUserInfo = this.changeUserInfo.bind(this)
        this.refreshToken = this.refreshToken.bind(this)
        this.createPokeAcct = this.createPokeAcct.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    componentDidMount() {
        this.refreshToken()
        this.getUser()
    }

    refreshToken() {
        let apiUrl = buildApiUrl('user/refresh', {})
        let refresh_token = localStorage.getItem('refresh_token')

        $.ajax({
            url: apiUrl,
            method: 'get',
            headers: {
                Authorization: refresh_token
            },
            success: function(data) {
                localStorage.setItem('access_token', data.access_token)
            }.bind(this),
            error: function(err) {
                throw err
            }
        })
    }

    setFormUserInfo(event) {
        let dic = {}
        let input = event.target

        if (input.name == 'img') {
            if(input.files && input.files[0]){
                let reader = new FileReader()
                reader.onload = function (e) {
                    dic[input.name] = e.target.result
                    this.setState(dic)
                }.bind(this)
                reader.readAsDataURL(input.files[0])
            }
        }
        else {
            dic[input.name] = input.value
            this.setState(dic)
        }
    }

    getUser() {
        let apiUrl = buildApiUrl('user', {})
        let access_token = localStorage.getItem('access_token')

        $.ajax({
            url: apiUrl,
            method: 'get',
            headers: {
                Authorization: access_token
            },
            success: function(data){
                this.setState({
                    user: data.user,
                    img: data.user.img,
                    name: data.user.name,
                    gender: data.user.gender,
                    birth: data.user.birth,
                    job: data.user.job,
                    job_position: data.user.job_position,
                    income: data.user.income,
                })
            }.bind(this),
            error: function(err){
                localStorage.removeItem('access_token')
                localStorage.removeItem('user_name')
                localStorage.removeItem('login_way')
                event = new Event('logState')
                document.dispatchEvent(event)

                if (location.href.indexOf('6006') == -1) location.href = '/'
            }.bind(this),
        })
    }

    changeUserInfo() {
        let apiUrl = buildApiUrl('user', {})
        let access_token = localStorage.getItem('access_token')
        let data = new FormData(document.getElementById('changeUserInfo'))

        $.ajax({
            url: apiUrl,
            method: 'patch',
            headers: {
                Authorization: access_token
            },
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data) {
                this.setState({
                    user: data.user
                })
                flash_message('使用者基本資料更新成功', '#changeUserInfo')
            }.bind(this),
            error: function(err) {
                throw err
            }
        })
    }

    createPokeAcct() {
        let apiUrl = buildApiUrl('user', {})
        let access_token = localStorage.getItem('access_token')
        let acct = $('#createPokeAcct input[name=acct]').val()
        let password = $('#createPokeAcct input[name=password]').val()
        let password2 = $('#createPokeAcct input[name=password2]').val()
        if (password != password2) {
            flash_message('兩次密碼不相同', false)
            return false
        }

        $.ajax({
            url: apiUrl,
            method: 'post',
            headers: {
                Authorization: access_token
            },
            data: {
                acct: acct,
                password: password,
            },
            success: function(data){
                this.setState({
                    user: data.user
                })
                flash_message('註冊POKE帳號成功', '#createPokeAcct')
            }.bind(this),
            error: function(err) {
                throw err
            }
        })
    }

    changePassword() {
        let apiUrl = buildApiUrl('user', {})
        let access_token = localStorage.getItem('access_token')
        let password = $('#changePassword input[name=password]').val()
        let password2 = $('#changePassword input[name=password2]').val()
        if ( password != password2 ) {
            flash_message('兩次密碼不相同', false)
            return false
        }

        $.ajax({
            url: apiUrl,
            method: 'patch',
            headers: {
                Authorization: access_token
            },
            data: {
                password: password,
            },
            success: function(data) {
                flash_message('密碼修改成功', '#changePassword')
                $('#changePassword').toggle()
            }.bind(this),
            error: function(err){
                throw err
            }.bind(this)
        })
    }

    changeEmail() {
        let apiUrl = buildApiUrl('user', {})
        let access_token = localStorage.getItem('access_token')
        
        if (confirm('確定要修改綁定信箱嗎?\n(帳號需要重新寄送驗證信，將無法登入直到驗證成功並且該步驟無法回復)')){
            $.ajax({
                url: apiUrl,
                method: 'patch',
                headers: {
                    Authorization: access_token
                },
                data: {
                    email: $('#verifyMail').val()
                },
                success: function(data) {
                    flash_message('信箱修改成功, 請接收驗證信')
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('user_name')
                    localStorage.removeItem('way')

                    event = new Event('logState')
                    document.dispatchEvent(event)
                }.bind(this),
                error: function(err) {
                    throw err
                }.bind(this)
            })
        }
    }

    render () {
        let userButton = (
            <div style={{width: 120, padding: '10px 30px', backgroundColor: 'brown', borderRadius: 20, alignSelf: 'center'}}>
                <DarkRedButton
                  style={{ width: '100%', padding: 0, margin: 0 }}
                  onClick={ evt => $('#changeUserInfo').toggle() }
                >
                修改基本資料
                </DarkRedButton>
                <form id="changeUserInfo"
                  style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(100, 100, 100, 0.5)', display: 'none' }}
                  onClick={evt => {if (evt.target.id=='changeUserInfo') $('#changeUserInfo').toggle() }}
                >
                    <div style={{ margin: '10vh auto', width: 800, padding: 20, borderRadius: 20, backgroundColor: 'white' }}>
                        <p>修改基本資料</p>
                        <hr/>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={this.state.img} style={{ width: 160, height: 160, borderRadius: 9999, backgroundColor: 'gray', margin: 50 }}/>
                                <label style={{ width: '20%', padding: '10px 30px', backgroundColor: 'brown', borderRadius: 20 }}>
                                    <DarkRedButton style={{ width: '100%', padding: 0 }}>變更圖像</DarkRedButton>
                                    <input type="file" name="img" style={{ display: 'none' }}  accept="image/jpeg, image/png" onChange={evt => this.setFormUserInfo(evt)} />
                                </label>
                            </div>

                            <div style={{ width: '50%' }}>
                                <label style={{ display: 'flex', margin: 10 }}>
                                    <div style={{ width: '20%', margin: 10}}>名字</div>
                                    <input style={{ width: '80%', borderRadius: 20, margin: 5, textAlign: 'center' }} 
                                           value={this.state.name} onChange={evt => this.setFormUserInfo(evt)} 
                                           name="name" />
                                </label>

                                <label style={{ display: 'flex', margin: 10 }}>
                                    <div style={{ width: '20%', margin: 10}}>性別</div>
                                    <div style={{ width: '80%', margin: 5, textAlign: 'center'}}>
                                        <input name="gender" type="radio" value="0" checked={this.state.gender=='0'} onChange={evt => this.setFormUserInfo(evt)} /> 女
                                        <input name="gender" type="radio" value="1" checked={this.state.gender=='1'} onChange={evt => this.setFormUserInfo(evt)} /> 男
                                    </div>
                                </label>

                                <label style={{ display: 'flex', margin: 10 }}>
                                    <div style={{ width: '20%', margin: 10}}>生日</div>
                                    <input type="date" name="birth"
                                           style={{ width: '80%', borderRadius: 20, margin: 5, textAlign: 'center' }} 
                                           value={this.state.birth} onChange={evt => this.setFormUserInfo(evt)} />
                                </label>
                                
                                <label style={{ display: 'flex', margin: 10 }}>
                                    <div style={{ width: '20%', margin: 10}}>職務別</div>
                                    <select name="job_position" style={{ width: '80%', borderRadius: 20, margin: 5, textAlignLast: 'center' }} 
                                            value={this.state.job_position || '請選擇'} onChange={evt => this.setFormUserInfo(evt)}>
                                        <option>請選擇</option>
                                        <option>營運/幕僚</option>
                                        <option>行政/總務/客服</option>
                                        <option>行銷/廣告/公關</option>
                                        <option>技術研發</option>
                                        <option>生產製造/品管/環衛</option>
                                        <option>採購/物流/倉儲</option>
                                        <option>文字/傳媒</option>
                                        <option>專業人員</option>
                                        <option>人力資源</option>
                                        <option>門市營業/餐飲服務</option>
                                        <option>業務/銷售</option>
                                        <option>軟體開發/MIS</option>
                                        <option>資訊軟體系統</option>
                                        <option>醫療/保健服務</option>
                                        <option>軍警消/保全</option>
                                        <option>財務/會計/金融專業</option>
                                        <option>設計/創意</option>
                                        <option>產品/專案管理</option>
                                        <option>其他</option>
                                    </select>
                                </label>
                                
                                <label style={{ display: 'flex', margin: 10 }}>
                                    <div style={{ width: '20%', margin: 10}}>職稱</div>
                                    <select name="job" style={{ width: '80%', borderRadius: 20, margin: 5, textAlignLast: 'center' }} 
                                            value={this.state.job || '請選擇'} onChange={evt => this.setFormUserInfo(evt)}>
                                        <option>請選擇</option>
                                        <option>企業經營者/負責人</option>
                                        <option>高階主管</option>
                                        <option>初中階主管</option>
                                        <option>一班職員</option>
                                        <option>專業人士</option>
                                        <option>學生</option>
                                        <option>其他</option>
                                    </select>
                                </label>
                                
                                <label style={{ display: 'flex', margin: 10 }}>
                                    <div style={{ width: '20%', margin: 10}}>月收入</div>
                                    <select name="income" style={{ width: '80%', borderRadius: 20, margin: 5, textAlignLast: 'center' }} 
                                            value={this.state.income || '請選擇'} onChange={evt => this.setFormUserInfo(evt)}>
                                        <option>請選擇</option>
                                        <option>20,000以下</option>
                                        <option>20,000-25,999</option>
                                        <option>26,000-29,999</option>
                                        <option>30,000-35,999</option>
                                        <option>36,000-39,999</option>
                                        <option>40,000-45,999</option>
                                        <option>46,000-49,999</option>
                                        <option>50,000-59,999</option>
                                        <option>60,000-69,999</option>
                                        <option>70,000以上</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <hr/>
                        <DarkRedButton style={{ margin: 'auto' }} onClick={this.changeUserInfo}>
                            確定送出
                        </DarkRedButton>
                    </div>
                </form>
            </div>
        )

        // 變更密碼 or 建立poke帳號
        let pokeButton = !!this.state.user.acct ? (
            <div style={{ width: '20%', padding: '10px 30px', backgroundColor: 'brown', borderRadius: 20, alignSelf: 'center' }}>
                <DarkRedButton
                  style={{ width: '100%', padding: 0, margin: 0 }}
                  onClick={evt=>{ $('#changePassword').toggle() }}
                >
                變更密碼
                </DarkRedButton>
                <div id="changePassword"
                  style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(100, 100, 100, 0.5)', display: 'none' }}
                  onClick={evt=> {if(evt.target.id=='changePassword') $('#changePassword').toggle()}}
                >
                    <div style={{ margin: '10vh auto', width: 450, padding: 20, borderRadius: 20, backgroundColor: 'white'}}>
                        <p>變更密碼</p>
                        <hr/>

                        <label style={{padding: 10, display: 'block'}}>新密碼：
                            <input type="password" name="password" placeholder="輸入密碼" style={{ width: 'calc(65% - 30px)', borderRadius: 20, padding: 10 }}/>
                        </label>

                        <label style={{padding: 10, display: 'block'}}>確認新密碼：
                            <input type="password" name="password2" placeholder="輸入密碼" style={{ width: 'calc(65% - 30px)', borderRadius: 20, padding: 10 }}/>
                        </label>

                        <DarkRedButton style={{ width: 'calc(100% - 60px)', margin: '20px 0px' }} onClick={this.changePassword}>送出</DarkRedButton>
                    </div>
                </div>
            </div>
        ) : (
            <div style={{ width: '20%', padding: '10px 30px', backgroundColor: 'brown', borderRadius: 20, alignSelf: 'center' }}>
                <DarkRedButton 
                  style={{ width: '100%', padding: 0, margin: 0 }}
                  onClick={evt=>{ $('#createPokeAcct').toggle() }}
                >
                建立POKE帳號
                </DarkRedButton>
                <div id="createPokeAcct" 
                  style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(100, 100, 100, 0.5)', display: 'none' }}
                  onClick={evt=> {if(evt.target.id=='createPokeAcct') $('#createPokeAcct').toggle()}}
                >
                    <div style={{ margin: '10vh auto', width: 450, padding: 20, borderRadius: 20, backgroundColor: 'white'}}>
                        <p>建立POKE帳號</p>
                        <hr/>
                        <label style={{padding: 10, margin: 10}}>帳號：
                            <input name="acct" placeholder="輸入帳號" style={{ width: 'calc(80% - 30px)', borderRadius: 20, padding: 10 }}/>
                        </label>
                        
                        <label style={{padding: 10, margin: 10}}>密碼：
                            <input type="password" name="password" placeholder="輸入密碼" style={{ width: 'calc(80% - 30px)', borderRadius: 20, padding: 10 }}/>
                        </label>
                        
                        <label style={{padding: 10, margin: 10}}>再次輸入密碼：
                            <input type="password" name="password2" placeholder="再次輸入密碼" style={{ width: 'calc(65% - 30px)', borderRadius: 20, padding: 10 }}/>
                        </label>
                        
                        <DarkRedButton style={{ width: 'calc(100% - 60px)', margin: '20px 0px' }} onClick={this.createPokeAcct}>送出</DarkRedButton>
                    </div>
                </div>
            </div>
        )

        return (
            <Container>
                <UpContainer>
                    <UserInfo>
                        <img src={this.state.user.img} style={{width: 190, height: 190, borderRadius: 9999, backgroundColor: 'gray'}}/>
                        { userButton }
                        {/* <DarkRedButton style={{width: 120}}>建立個人資料</DarkRedButton> */}
                    </UserInfo>
                    <PetInfo>
                        <div>
                            <p/>
                            <NewPet>
                                <FaPlus style={{ fontSize: '4rem', marginTop: 30 }}/>
                                <div>建立寵物</div>
                            </NewPet>
                            <p/>
                        </div>
                    </PetInfo>
                </UpContainer>
                
                <DownContainer>
                    <p>登入方式 / 變更密碼</p>
                    <Info>
                        <Line align="center">
                            <img style={{width: 72, height: 72, backgroundColor: 'gray', borderRadius: 9999}} src={this.state.user.google_picture}/>
                            <FaGooglePlus style={{ color: 'brown', fontSize: '4rem', alignSelf: 'center' }}/>
                            
                            <div style={{ alignSelf: 'center', width: '40%' }}>{!!this.state.user.google_id ? `已連結為${this.state.user.google_name}`: `未連結`}</div>
                            <DarkRedButton>{!!this.state.user.google_id ? `取消連結` : `前往連結`}</DarkRedButton>
                        </Line>

                        <Line>
                            <img style={{width: 72, height: 72, backgroundColor: 'gray', borderRadius: 9999}} src={this.state.user.facebook_picture}/>
                            <FaFacebook style={{ color: 'darkblue', fontSize: '4rem', alignSelf: 'center' }}/>
                            
                            <div style={{ alignSelf: 'center', width: '40%' }}>{!!this.state.user.facebook_id ? `已連結為${this.state.user.facebook_name}`: `未連結`}</div>
                            <DarkRedButton>{!!this.state.user.facebook_id ? `取消連結`: `前往連結`}</DarkRedButton>
                        </Line>

                        <Line>
                            <img style={{ width: 72, height: 72, backgroundColor: 'gray', borderRadius: 9999 }} src={this.state.user.img}/>
                            <div style={{ width: 72, height: 72, alignSelf: 'center', backgroundColor: 'pink', color: 'white', borderRadius: 9999}}></div>
                            
                            <div style={{ alignSelf: 'center', width: '40%' }}>{!!this.state.user.acct ? `已建立POKE帳號 ${this.state.user.name}`: `未建立POKE帳號`}</div>
                            { pokeButton }
                        </Line>
                    </Info>
                </DownContainer>

                <DownContainer>
                    <p>驗證</p>
                    <Info>
                        <Line>
                            <div style={{ width: 184, alignSelf: 'center'}}>電子信箱</div>
                            <input id="verifyMail" style={{ width: '40%', borderRadius: 20, textAlign: 'center' }} placeholder={this.state.user.email}
                              onKeyPress={event=>{
                                if ( (event.keyCode ? event.keyCode : event.which) == 13 ) {
                                    this.changeEmail()
                                }
                                else if ( this.state.user.email != event.target.value ) {
                                    $('#submitVerifyMail').text('重設信箱').css('cursor', 'pointer')
                                }
                            }}
                            />
                            <DarkRedButton id="submitVerifyMail" style={{ cursor: 'default' }} onClick={this.changeEmail}>
                                {this.state.user.status=='Mailing' ? `未驗證` : `已驗證`}
                            </DarkRedButton>
                        </Line>
                    </Info>
                </DownContainer>
            </Container>
        )
    }
}

export default InfoContainer