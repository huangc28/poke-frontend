import React from 'react'
import styled from 'styled-components'
import SvgIcon from '@material-ui/core/SvgIcon'

const HeaderRegion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 64px;
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

const Navigation = styled.div`
  display: flex;
  flex-direction: inline-flex;
`

const NavElem = styled.div`
  border-right: solid 1px #8f8f8f;
  padding: 0 0.625rem;
  color:  #8f8f8f;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  :hover {
    color: #f08cb0;
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

const AccountIcon = (...props) => (
  <SvgIcon {...props}>
    <path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
  </SvgIcon>
)

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
                {elm.title}
              </NavElem>
            ))
          }
        </Navigation>
      </HeadLeft>

      <HeadRight>
        {/* Icon */}
        <AccountIcon />

        {/* Search bar */}
      </HeadRight>
    </HeaderRegion>
  )
}

export default Header