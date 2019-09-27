import React, { Component } from 'react'
import Main from '@poke/layouts/Main'
import HomeSecOne from '../Home/components/HomeSecOne'
import HomeSecTwo from '../Home/components/HomeSecTwo'
import HomeSecThree from '../Home/components/HomeSecThree'
import HomeSecFour from '../Home/components/HomeSecFour'
import HomeSecFive from '../Home/components/HomeSecFive'
// import {flash_message} from '@poke/components/Message'
import $ from 'jquery'


class Verify extends Component {
  componentDidMount() {
    const urlParams = new URLSearchParams(location.search);
    const access_token = urlParams.get('token');
    
    $.ajax({
        url: 'https://api.poke.love/user/',
        method: 'patch',
        headers: {
            Authorization: access_token,
        },
        data: {
            status: 'activated'
        }
    })
    .done(function(response){
        localStorage.setItem('access_token', access_token)
        // flash_message('驗證成功')
    })
    .fail(function(response){
        location.href = '/'
    })
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

export default Verify