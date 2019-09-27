import React from 'react'
import PropTypes from 'prop-types'

import Header from '@poke/components/Header'
import { Message } from '@poke/components/Message'
import Footer from '@poke/components/Footer'

const Main = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Message />
        { children }
      <Footer />
    </React.Fragment>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main