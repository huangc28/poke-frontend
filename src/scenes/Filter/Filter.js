import React, { Component } from 'react'
import Main from '@poke/layouts/Main'
import { buildApiUrl } from '@poke/services/apis/util'
// import {flash_message} from '@poke/components/Message'
import $ from 'jquery'
import FilterSecOne from './components/FilterSecOne';
import FilterSecTwo from './components/FilterSecTwo';

class Filter extends Component {

  componentDidMount() {
  }

  render() {
    return (
    <Main>
        <FilterSecOne/>
        <FilterSecTwo/>
    </Main>
    )
  }
}

export default Filter