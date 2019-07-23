import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import HeaderMenu from '@poke/components/HeaderMenu'

import Logo from './images/50.png'
import Navbar, { NavElem } from './components/Navbar'
import SearchBar from '../SearchBar'
import { Account as AccIcon } from '../Icons'

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

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  & > a {
    text-decoration: none;
    color:  #8f8f8f;
  }
`

const IconContainer = styled.div`
  display: flex;
  margin-right: 0.25rem;
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

const MenuContainer = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0.5rem;
  padding-top: 2.5rem;
`

const NavContent = styled.div`
  position: relative;
  color: #8f8f8f;

  &:hover > ${MenuContainer} {
    visibility: visible;
  }

  &:hover > a {
    text-decoration: none;
    color:  #8f8f8f;
  }
`

const Header = () => {
  return (
    <HeaderRegion>
      <HeadLeft>
        {/* Logo */}
        <LogoContainer>
          <img
            height={44}
            width={132}
            src={Logo}
          />
        </LogoContainer>

        {/* Navigation */}
        <Navbar>
          <NavElem>
            <NavContent>
              <a onClick={evt => evt.preventDefault()}>
                小百科
              </a>
              <MenuContainer>
                <HeaderMenu />
              </MenuContainer>
            </NavContent>
          </NavElem>

          <NavElem>
            <Link to=''>
              篩選器
            </Link>
          </NavElem>

          <NavElem>
            <Link to=''>
              理念
            </Link>
          </NavElem>
        </Navbar>
      </HeadLeft>

      <HeadRight>
        <LoginContainer>
          {/* Icon */}
          <IconContainer>
            <AccIcon
              fontSize='small'
            />
          </IconContainer>

          <Link to=''>
            Login
          </Link>
        </LoginContainer>
        <SearchBar />
      </HeadRight>
    </HeaderRegion>
  )
}

export default Header