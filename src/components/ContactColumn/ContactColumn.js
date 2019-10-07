import React, { Component } from 'react'
import styled from 'styled-components'
import EmailIcon from '@material-ui/icons/Email'

import Button from '@poke/components/Button'
import { Facebook, Instagram } from '@poke/components/Icons'
import { size14Mixin } from '@poke/styles/font'
import TopicLayout from '@poke/layouts/TopicLayout'
import colors from '@poke/styles/colors'
import SearchBar from '@poke/components/SearchBar'

const Content = styled.div`
  background-color: ${colors.gallery};
  width: 100%;
  position: absolute;
`

const SubscribeContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.625rem;

  & > svg:first-of-type{
    margin-right: 1rem;
  }

  & > p {
    ${size14Mixin}
    max-width: 9.25rem;
    margin: 0;
    letter-spacing: 0.15rem;
    color: ${colors.fiord};
  }
`

const ButtonContainer = styled.div`
  margin-top: 1.625rem;
  display: flex;
  justify-content: flex-end;
`

const Icons = styled.div`
  display: flex;

  & > div:first-of-type {
    margin-right: 1.25rem;
  }
`

class ContactColumn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            top: 130,
            default: 130,
        }
        this.scroll = this.scroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll, true)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll)
    }

    scroll() {
        let target = document.getElementById('floatingContain') 
        if (target) {
            let max = target.parentNode.clientHeight - target.clientHeight 
            let min = target.parentNode.offsetTop
            
            this.setState({
                top: Math.max(this.state.default, Math.min(max, window.scrollY - min + this.state.default))
            })
        }
    }

    render() {
        return (
            <Content id="floatingContain" style={{ top: this.state.top }} >
                <TopicLayout topic='訂閱我們' >
                    <SubscribeContent>
                        {/* Icon */}
                        <EmailIcon style={{ fontSize: 51, }} />
                        {/* Description */}
                        <p>
                            喜歡我們的文章麻?
                            請輸入信箱訂閱我們
                        </p>
                    </SubscribeContent>
                    {/* Email bar */}
                    <SearchBar disabled placeholder='poke@poke.life' />
                    {/* Subscribe */}
                    <ButtonContainer>
                        <Button text='立即訂閱' size='small' />
                    </ButtonContainer>
                </TopicLayout>

                <TopicLayout topic='追蹤我們' >
                    <Icons>
                        <Facebook width={55} height={55} />
                        <Instagram width={55} height={55} />
                    </Icons>
                </TopicLayout>
            </Content>
        )
    }
}

export default ContactColumn