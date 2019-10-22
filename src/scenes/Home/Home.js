import React, { Component } from 'react'

import Main from '@poke/layouts/Main'
import { flash_message } from '@poke/components/Message';

import HomeSecOne from './components/HomeSecOne'
import HomeSecTwo from './components/HomeSecTwo'
import HomeSecThree from './components/HomeSecThree'
import HomeSecFour from './components/HomeSecFour'
import HomeSecFive from './components/HomeSecFive'
import HomeSecSix from './components/HomeSecSix'

class Home extends Component {
    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.title = 'POKE'
            const urlParams = new URLSearchParams(location.search)
            const message = urlParams.get('message')
            if (!!message) flash_message(message, false)
        }
    }
    render () {
        return (
            <Main>
                <HomeSecOne />
            
                <HomeSecTwo />
            
                <HomeSecThree />
            
                <HomeSecFour />
            
                <HomeSecFive />
            
                <HomeSecSix />
            </Main>
        )
    }
}


export default Home