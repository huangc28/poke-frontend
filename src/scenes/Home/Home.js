import React from 'react'

import Header from '@poke/components/Header'
import Footer from '@poke/components/Footer'

import HomeSecOne from './components/HomeSecOne'
import HomeSecTwo from './components/HomeSecTwo'
import HomeSecThree from './components/HomeSecThree'
import HomeSecFour from './components/HomeSecFour'
import HomeSecFive from './components/HomeSecFive'
import HomeSecSix from './components/HomeSecSix'

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <HomeSecOne />

      <HomeSecTwo />

      <HomeSecThree />

      <HomeSecFour />

      <HomeSecFive />

      <HomeSecSix />

      <Footer />
    </React.Fragment>
  )
}

export default Home