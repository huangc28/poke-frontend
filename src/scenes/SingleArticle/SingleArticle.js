import React, { Component } from 'react'
import styled from 'styled-components'
import Main from '@poke/layouts/Main'
import { buildApiUrl } from '@poke/services/apis/util'

import $ from 'jquery'

import defaultBanner from './images/default_banner.png'
import line_bg from './images/line_bg.png'
import ContactLayout from '@poke/layouts/ContactLayout'
import { size40Mixin } from '@poke/styles/font'
import { insetShadow } from '@poke/styles/shadow'
import colors from '@poke/styles/colors'
import IconLabel, { blackTheme } from '@poke/components/IconLabel'
import { RecentUpdatedDate, NumViews } from '@poke/components/Icons'
import TimeAgo from '@poke/components/TimeAgo'
import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'

const MiddenContent = styled.div`
  padding: 0 2.375rem 2.5rem;
`

const TopBanner = styled.div`
  ${insetShadow}
  background: url(${({ img }) => img}) no-repeat right top;
  background-size: cover;
  background-color: ${colors.white};
  width: 100%;
  min-height: 30rem ;
`

const TopicBar = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 2.75rem 0 3.875rem 0;
`

const Topic = styled.div`
  ${size40Mixin}
  display: flex;
  align-items: flex-start;
`

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const DownContent = styled.div`
  background: url(${line_bg}) repeat center center fixed;
  padding: 50px;
`

const Replies = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: ${colors.white};
  position: relative;
`

const TextArea = styled.textarea`
  border: none;
  width: calc(100% - 20px);
  border-bottom: 1px solid;
  padding: 10px;
  margin: 10px 0px;
  &:disabled {
    background-color: ${colors.white};
  }
`

const BtnCancel = styled.div`
  display: ${props => props.disabled ? 'none' : 'unset' };  
  width: 57px;
  height: 22px;
  border-radius: 10px;
  background-color: ${colors.silver};
  float: right;
  text-align: center;
  margin-left: 5px;
  padding: 3px;
  line-height: 1.29;
  letter-spacing: 2.8px;
  font-family: MicrosoftJhengHei;
  font-size: 14px;
  cursor: pointer;
`

const BtnReply = styled.div`
  display: ${props => props.disabled ? 'none' : 'unset' };
  width: 57px;
  height: 22px;
  border-radius: 10px;
  background-color: ${colors.silver};
  float: right;
  text-align: center;
  margin-left: 5px;
  padding: 3px;
  line-height: 1.29;
  letter-spacing: 2.8px;
  font-family: MicrosoftJhengHei;
  font-size: 14px;
  cursor: pointer;
`

class SingleArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            article_id: parseInt(this.props.match.params.articleID),
            user_img: '',
            replies_total_count: 0,
            replies: [],
            replyText: ''
        }

        this.getArticle = this.getArticle.bind(this)
        this.logState = this.logState.bind(this)
        this.changeReplyText = this.changeReplyText.bind(this)
        this.postReply = this.postReply.bind(this)
        this.scroll = this.scroll.bind(this)
    }

    componentDidMount(){
        if (typeof window !== 'undefined') {
            document.addEventListener('logState', this.logState)
            window.addEventListener('scroll', this.scroll, true)
        }
        this.getArticle(this.state.article_id)
        this.logState()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll)
    }

    logState() {
        this.setState({
            user_img: localStorage.getItem('user_img')
        })
    }
    scroll() {
        let DownContent = document.getElementById('DownContent')
        let article_id = this.state.article_id
        
        window.scrollY >= DownContent.offsetTop && 
        this.state.replies.length <= this.state.replies_total_count  &&
        this.getReplies(article_id, {offset: this.state.replies.length, limit: 5, sort: 'created_at', desc: true})
    }

    getArticle(article_id){
        let apiUrl = buildApiUrl(`articles/${article_id}`, {})

        $.ajax({
            url: apiUrl,
            method: 'get', 
            success: function(data){
                this.setState(data)
                this.getReplies(this.state.article_id, {offset: 0, limit: 5, sort: 'created_at', desc: true})
            }.bind(this),
            error: function(err){
                throw err
            }.bind(this)
        })
    }

    getReplies(article_id, params) {
        let apiUrl = buildApiUrl(`articles/${article_id}/replies`, params)

        $.ajax({
            url: apiUrl,
            method: 'get',
            success: function(data){
                let replies = this.state.replies

                data.replies.map((v,i) => { 
                    if ( replies.map(v=> {return v.reply_id}).indexOf(v.reply_id) == -1 ) replies.push(v) 
                })

                this.setState({
                    replies_total_count: data.total_count,
                    replies
                })
            }.bind(this),
            error: function(err) {
                throw err
            }.bind(this)
        })
    }

    changeReplyText(event){
        this.setState({
            replyText: event.target.value
        })
    }

    postReply(){
        let access_token = localStorage.getItem('access_token')
        let article_id = this.state.article_id
        let content = this.state.replyText
        let apiUrl = buildApiUrl(`articles/${article_id}/replies`)

        $.ajax({
            url: apiUrl,
            method: 'post',
            headers: {
                Authorization: access_token
            },
            data: {
                content
            },
            success: function(data){
                let replies = this.state.replies
                let replies_total_count = this.state.replies_total_count
                replies.unshift(data.reply)
                replies_total_count += 1

                this.setState({ replies, replies_total_count })
            }.bind(this),
            error: function(err) {
                throw err
            }
        })
    }

    render() {
        let user_img = (typeof window !== 'undefined') ? localStorage.getItem('user_img') : ''

        let replies = this.state.replies.map((reply,i) => {
            return (
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <img src={reply.user_img || `https://via.placeholder.com/${60}x${60}`} style={{ backgroundColor: '#eeee', width: 60, height: 60, borderRadius: 9999, margin: 10 }}/>
                    <div>
                        <div>
                            <span style={{fontSize: 14, lineHeight: 1.29, letterSpacing: 2.8, marginRight: 10}}>{reply.user_name}</span>
                            <span style={{fontSize: 8}}>{reply.created_at}</span>
                        </div>
                        <div style={{ fontSize: 14, lineHeight: 1.29, letterSpacing: 2.8, marginTop: 10 }} dangerouslySetInnerHTML={{ __html: reply.content.replace('\n', '<br/>') }}></div>
                    </div>
                </div>
            )
        })

        return (
            <Main>
            <ContactLayout>
              <TopBanner img={this.state.img || defaultBanner} />
      
              <MiddenContent>
                <TopicBar>
                  <Topic>
                    { this.state.title }
                  </Topic>
                  <StatContainer>
                    {/* created at */}
                    <IconLabel
                      theme={blackTheme}
                      cursor='default'
                      icon={
                        <RecentUpdatedDate
                          width={16}
                          height={16}
                        />
                      }
                      label={
                        <TimeAgo
                          time={
                            this.state.updated_at
                              ? convertDateTimeStringToTimestamp(this.state.updated_at)
                              : Date.now()
                          }
                        />
                      }
                    />
      
                    {/* viewed */}
                    <IconLabel
                      theme={blackTheme}
                      icon={
                        <NumViews
                          width={16}
                          height={16}
                        />
                      }
                      label={this.state.visit}
                    />
                  </StatContainer>
                </TopicBar>
                <div dangerouslySetInnerHTML={{ __html: this.state.content }}/>
              </MiddenContent>
              
              <DownContent id="DownContent">
                  <div style={{ borderBottom: `2px solid ${colors.prussianBlue}` }}>大家還看了</div>
                  <Replies>
                      <div style={{position: 'absolute', margin: '3px 20px 0px 0px', top: 0, right: 0}}>{this.state.replies_total_count}則留言</div>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <img src={user_img || `https://via.placeholder.com/${60}x${60}`} style={{ backgroundColor: '#eeee', width: 60, height: 60, borderRadius: 9999, margin: 10 }}/>
                          <div style={{ width: 'calc(100% - 80px)' }}>
                              <TextArea id="replyText" type="text" 
                                     placeholder={ !!this.state.user_img ? '新增公開留言...' : '請登入後回復' }
                                     value={ !!this.state.user_img ? this.state.replyText : ''} 
                                     onChange={evt => this.changeReplyText(evt)} disabled={ !this.state.user_img }
                              />
                              <BtnReply disabled={ !this.state.user_img } onClick={this.postReply}>留言</BtnReply>
                              <BtnCancel disabled={ !this.state.user_img } onClick={evt => {this.setState({replyText:''})}}>取消</BtnCancel>
                          </div>
                      </div>
                    {replies}
                  </Replies>
              </DownContent>


            </ContactLayout>
            </Main>
        )
    }
}

export default SingleArticle