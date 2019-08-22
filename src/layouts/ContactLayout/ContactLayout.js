import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'
import { insetShadow } from '@poke/styles/shadow'

import ContactColumn from '@poke/components/ContactColumn'

const Section = styled.section`
  display: grid;
  grid-template-columns: 72.5% 27.5%;
  background-color: ${colors.white};
`

const Right = styled.div`
  ${insetShadow}
  display: flex;
  justify-content: center;
  background-color: ${colors.gallery};
  padding-bottom: 1.875rem;
`
const ContactContainer = styled.div`
  width: 18.125rem;
  padding-top: 3.875rem;
`

const ContactLayout = ({ children }) => {
  return (
    <Section>
      <div>
        { children }
      </div>

      <Right>
        <ContactContainer>
          <ContactColumn />
        </ContactContainer>
      </Right>
    </Section>
  )
}

ContactLayout.propTypes = {
  children: PropTypes.node,
}

export default ContactLayout