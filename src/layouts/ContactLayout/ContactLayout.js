import React, { useEffect, useState } from 'react'
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
  padding-top: ${({ hasReachedTop }) => hasReachedTop ? '8.6rem': '9.375rem'};
  width: 18.125rem;
`

function ContactLayout ({ children }) {
  let domRef = React.createRef()
  const [hasReached, setHasReached] = useState(false)
  useEffect(() => {
    let sticky = domRef.current.offsetTop + 500 // 500 is the offset to make sticky effect to be smoother.
    function handleWindowScroll() {
      window.scrollY > sticky
        ? setHasReached(true)
        : setHasReached(false)
    }

    window.addEventListener('scroll', handleWindowScroll)

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  return (
    <Section ref={domRef}>
      <div>
        { children }
      </div>

      <Right>
        <ContactContainer
          hasReachedTop={hasReached}
        >
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