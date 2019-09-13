import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Magnifier from '@material-ui/icons/Search'

import colors from '@poke/styles/colors'

import Logo from './images/50.png'
import Navbar, { NavElem } from './components/Navbar'
import HeaderMenu, { MenuItem } from './components/HeaderMenu'
import SearchBar from '../SearchBar'
import { FaBars, FaSearch } from 'react-icons/fa'

const HeaderRegion = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
      position: fixed;
      z-index: 1;
      width: 100%;
      padding: 0px;
      margin: 0px;
      background-color: ${colors.white};
  }
  @media (min-width: 577px) and (min-height: 577px) {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1;
      /* display: flex; */
      flex-direction: row;
      justify-content: space-evenly;
      height: 4rem;
      background-color: ${colors.concrete};
      box-shadow: 0 4px 1px -2px  rgba(0,0,0,0.30);
      align-items: center;
  }
`
const HeaderStuff = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
      display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
      width: 100%;
      height: 3.5rem;
  }
`

const LogoContainer = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
      cursor: pointer;
      margin-right: 2.125rem;
  }
`
const Mobile = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {

  }
  @media (min-width: 577px) and (min-height: 577px) {
      display: none;
  }
`

const HeadLeft = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
      margin-top: 6px;
      margin-left: 6px;
      padding: 0px;
      display: flex;
      position: relative;
  }
  @media (min-width: 577px) and (min-height: 577px) {
      max-width: 170px;
      width: 20%;
      float: left;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0.375rem 0 0.375rem 1.875rem;
      box-sizing: border-box;
      flex: 1;
  }
`

const HeadCenter = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    float: left;
    padding: 0.375rem 0px 0.375rem 0rem;
  }
`

const HeadRight = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    float: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0.375rem 2.75rem 0.375rem 1.875rem;
    box-sizing: border-box;
    flex: 1;
  }

`

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  & > a {
    text-decoration: none;
    color: ${colors.gray};
  }
`



const MenuContainer = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
      visibility: hidden;
      position: absolute;
  }
  @media (min-width: 577px) and (min-height: 577px) {
      visibility: hidden;
      position: absolute;
      top: 1rem;
      padding-top: 2.5rem;
      z-index: 20;
  }
`

const NavContent = styled.div`
  position: relative;
  color: ${colors.gray};

  &:hover > ${MenuContainer} {
    visibility: visible;
  }

  &:hover > a {
    text-decoration: none;
    color: ${colors.gray};
  }
`

const LogoImg = styled.img`
  @media all and (max-width: 576px), all and (max-height: 576px) {
      height: 65px;
      width: 180px;
  }
  @media (min-width: 577px) and (min-height: 577px) {
      height: 44px;
      width: 132px;
  }
`


function Header ({ history }) {
  return (
    <React.Fragment>
      <HeaderStuff />
      <HeaderRegion>
        <HeadLeft>
          {/* Logo */}
          <LogoContainer onClick={evt => {
              evt.preventDefault()
              history.push('/')
            }}>
            <LogoImg src={Logo}></LogoImg>
          </LogoContainer>
          <Mobile style={{ padding: '22px 10px 10px 10px' }}>
              <FaSearch style={{ color: '#a0a0a0', 'font-size': '30px' }}></FaSearch>
          </Mobile>
          <Mobile style={{ position: 'absolute', right: '0px', padding: '16px 15px' }}>
              <FaBars style={{ color: '#3c4e6b', 'font-size': '40px' }}></FaBars>
          </Mobile>
        </HeadLeft>
        <HeadCenter>
          {/* Navigation */}
          <Navbar>
            <NavElem>
              <NavContent>
                <a onClick={evt => {
                  evt.preventDefault()
                  history.push('/knowledge')
                }}>
                  小百科
                </a>
                <MenuContainer>
                  <HeaderMenu>
                    <MenuItem
                      onClick={evt => {
                        evt.preventDefault()
                        history.push('/knowledge')
                      }}
                    >
                      營養小百科
                    </MenuItem>
                    <MenuItem>
                      飯飯標示大全
                    </MenuItem>
                    <MenuItem
                      onClick={evt => {
                        evt.preventDefault()
                        history.push('/food-knowledge')
                      }}
                    >
                      飯飯學問大
                    </MenuItem>
                  </HeaderMenu>
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
        </HeadCenter>
        <HeadRight>
          <LoginContainer>
            {/* Icon */}
            {/* @ref how to disable react router link: https://github.com/ReactTraining/react-router/issues/1082 */}
            {/*
              <IconContainer>
                <AccIcon
                  fontSize='small'
                />
              </IconContainer>
            
            <Link
              to='/login'
              onClick={evt => evt.preventDefault()}
            >
            Login
            </Link>
          */}
          </LoginContainer>
          <SearchBar
            placeholder='SEARCH'
            icon={<Magnifier
              style={{
                fontSize: 16,
              }}
            />}
          />
        </HeadRight>
      </HeaderRegion>
    </React.Fragment>
  )
}

Header.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withRouter(Header)