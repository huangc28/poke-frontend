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
  ${insetShadow}
`

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7.4375rem;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.gallery};
`

const Content = styled.div`
  & > div {
    margin-bottom: 4.625rem;
  }
`
const ContactContainer = styled.div`
  width: 18.125rem;
  padding-top: 8.6rem;
`

const ContactLayout = ({ children }) => {
  return (
    <Section>
      <Left>
        <Content>
          { children }
        </Content>
      </Left>

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