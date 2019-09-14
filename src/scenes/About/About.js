import React from 'react'

import Main from '@poke/layouts/Main'
import AboutSecOne from './components/AboutSecOne'
import AboutSecTwo from './components/AboutSecTwo'
import AboutSecThree from './components/AboutSecThree'
import AboutSecFour from './components/AboutSecFour'

const About = () => {
  return (
    <Main>
      <AboutSecOne/>
      <AboutSecTwo/>
      <AboutSecThree/>
      <AboutSecFour/>
    </Main>
  )
}

export default About