import React, { Component } from 'react'
import Main from '@poke/layouts/Main'
import HomeSecOne from '../Home/components/HomeSecOne'
import HomeSecTwo from '../Home/components/HomeSecTwo'
import HomeSecThree from '../Home/components/HomeSecThree'
import HomeSecFour from '../Home/components/HomeSecFour'
import HomeSecFive from '../Home/components/HomeSecFive'
import {flash_message} from '@poke/components/Message'
import $ from 'jquery'


class FindAcct extends Component {
  componentDidMount() {
    // if (typeof window !== 'undefined') {
    //     const urlParams = new URLSearchParams(location.search);
    //     const access_token = urlParams.get('token');
    //     const way = urlParams.get('way');
        
    //     localStorage.setItem('access_token', access_token)
    //     localStorage.setItem('user_name', user_name)
    //     localStorage.setItem('way', way)

    //     event = new Event('logState')
    //     document.dispatchEvent(event)
    //     flash_message('登入成功', true)
    // }
  }

  render() {
    return (
    <Main>
        <HomeSecOne/>
        <HomeSecTwo/>
        <HomeSecThree/>
        <HomeSecFour/>
        <HomeSecFive/>
    </Main>
    )
  }
}

export default FindAcct