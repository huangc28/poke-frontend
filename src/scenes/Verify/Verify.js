import React, { Component } from 'react'
import Main from '@poke/layouts/Main'

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
        location.href = '/'
    })
    .fail(function(response){
        location.href = '/'
    })
  }

  render() {
    return (
    <Main></Main>
    )
  }
}

export default Verify