import React, { Component } from 'react'
import Main from '@poke/layouts/Main'

import $ from 'jquery'
import InfoContainer from './components/InfoContainer';


class User extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
      
  }

  render() {
    return (
    <Main>
        <InfoContainer/>
    </Main>
    )
  }
}

export default User