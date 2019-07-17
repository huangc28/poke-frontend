import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Account as AccIcon } from '../Icons'

import SearchBar from '../SearchBar'

const HeaderRegion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 4rem;
  background-color: #f2f2f2;
  box-shadow: 0 4px 1px -2px  rgba(0,0,0,0.30);;
  align-items: center;
;
`
const LogoContainer = styled.div`
  margin-right: 2.125rem;
`

const HeadLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.375rem 0 0.375rem 1.875rem;
  box-sizing: border-box;
  flex: 1;
`

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

const HeadRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0.375rem 2.75rem 0.375rem 1.875rem;
  box-sizing: border-box;
  flex: 1;
`

const navElms = [
  {
    title: '小百科',
    link: '',
  },
  {
    title: '篩選器',
    link: '',
  },
  {
    title: '理念',
    link: '',
  },
]

const Header = () => {
  return (
    <HeaderRegion>
      <HeadLeft>
        {/* Logo */}
        <LogoContainer>
          <img
            height={44}
            width={132}
            src='http://via.placeholder.com/132x44?text=Logo+text'
          />
        </LogoContainer>

        {/* Navigation */}
        <Navigation>
          {
            navElms.map(elm => (
              <NavElem>
                <Link to={elm.link}>
                  {elm.title}
                </Link>
              </NavElem>
            ))
          }
        </Navigation>
      </HeadLeft>

      <HeadRight>
        {/* Icon */}
        <AccIcon
          fontSize='small'
        />

        Login

        <SearchBar />
      </HeadRight>
    </HeaderRegion>
  )
}

export default Header