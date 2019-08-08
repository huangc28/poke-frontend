import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import AccIcon from '@material-ui/icons/Person'
import Magnifier from '@material-ui/icons/Search'

import colors from '@poke/styles/colors'

import Logo from './images/50.png'
import Navbar, { NavElem } from './components/Navbar'
import HeaderMenu, { MenuItem } from './components/HeaderMenu'
import SearchBar from '../SearchBar'

const HeaderRegion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 4rem;
  background-color: ${colors.concrete};
  box-shadow: 0 4px 1px -2px  rgba(0,0,0,0.30);
  align-items: center;
`
const LogoContainer = styled.div`
  cursor: pointer;
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
    color: ${colors.gray};
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
  top: 1rem;
  padding-top: 2.5rem;
  z-index: 20;
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

const Header = ({ history }) => {
  return (
    <HeaderRegion>
      <HeadLeft>
        {/* Logo */}
        <LogoContainer
          onClick={evt => {
            evt.preventDefault()
            history.push('/')
          }}
        >
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
                    寵物觀察日記
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
            <Link to='/knowledge'>
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

          {/* @ref how to disable react router link: https://github.com/ReactTraining/react-router/issues/1082 */}
          <Link
            to='/login'
            onClick={evt => evt.preventDefault()}
          >
            Login
          </Link>
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
  )
}

Header.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withRouter(Header)