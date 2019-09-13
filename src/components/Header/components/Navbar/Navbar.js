import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

const Navigation = styled.ul`
  @media all and (max-width: 576px), all and (max-height: 576px) {
      display: block;
  }
  @media (min-width: 577px) and (min-height: 577px) {
      display: flex;
      flex-direction: inline-flex;
      list-style: none;
      padding: 0;
  }
`
const NavElem = styled.li`
  border-right: solid 1px ${colors.gray};
  padding: 0 0.625rem;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  :hover {
    color: ${colors.mauvelous};
  }

  & > a {
    text-decoration: none;
    color: ${colors.gray};
  }
`

const Navbar = ({ children }) => {
  return (
    <Navigation>
      {
        children.map(elm => elm)
      }
    </Navigation>
  )
}

Navbar.propTypes = {
  children: PropTypes.array,
}

Navbar.defaultProps = {
  children: [null],
}

export { NavElem }
export default Navbar