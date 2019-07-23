import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Navigation = styled.ul`
  display: flex;
  flex-direction: inline-flex;
  list-style: none;
  padding: 0;
`
const NavElem = styled.li`
  border-right: solid 1px #8f8f8f;
  padding: 0 0.625rem;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  :hover {
    color: #f08cb0;
  }

  & > a {
    text-decoration: none;
    color:  #8f8f8f;
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
  children: PropTypes.arrayOf(PropTypes.elementType),
}

Navbar.defaultProps = {
  children: [],
}

export { NavElem }
export default Navbar