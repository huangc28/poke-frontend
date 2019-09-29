import React, { useEffect, useState, Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

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

const fixedToTop = css`
  position: fixed;
  top: 0;
`

const ContactContainer = styled.div`
  ${({ hasReachedTop }) => hasReachedTop ? fixedToTop : ''}
  padding-top: 8.6rem;
  width: 100%;
  position: relative;
`

class ContactLayout extends Component {

    render() {
        return (
            <Section>
                <div>
                    {this.props.children}
                </div>

                <Right>
                    <ContactContainer>
                        <ContactColumn min={this.props.min} />
                    </ContactContainer>
                </Right>
            </Section>
        )
    }
}

ContactLayout.propTypes = {
  children: PropTypes.node,
}

export default ContactLayout