import React from 'react'

import Main from '@poke/layouts/Main'

import HomeSecOne from './components/HomeSecOne'
import HomeSecTwo from './components/HomeSecTwo'
import HomeSecThree from './components/HomeSecThree'
import HomeSecFour from './components/HomeSecFour'
import HomeSecFive from './components/HomeSecFive'
import HomeSecSix from './components/HomeSecSix'

const Home = () => {
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

export default Home