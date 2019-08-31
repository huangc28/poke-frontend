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
  padding-top: 8.6rem;
  width: 18.125rem;
`
function offset(el) {
    let rect = el.getBoundingClientRect()
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function ContactLayout ({ children }) {
  let domRef = React.createRef()
  const [hasReached, setHasReached] = useState(false)

  useEffect(() => {
    let sticky = offset(domRef.current).top
    function handleScrollWindow(offsetTop) {
      const SCROLL_BOTTOM_OFFSET = 36
      setHasReached((window.scrollY - SCROLL_BOTTOM_OFFSET) > offsetTop)
    }

    handleScrollWindow(sticky)
    window.addEventListener('scroll', handleScrollWindow.bind(null, sticky))
    return () => {
      window.removeEventListener('scroll', handleScrollWindow.bind(null, sticky))
    }
  }, [])

  return (
    <Section>
      <div>
        { children }
      </div>

      <Right>
        <ContactContainer
          ref={domRef}
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