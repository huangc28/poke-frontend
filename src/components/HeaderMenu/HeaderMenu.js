import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  background: #fef9f9;
  border-radius: 0 0.4rem 0.4rem 0.4rem;
  width: 8.75rem;
  height: 8.75rem;
  box-shadow: 0 10px 20px 0 rgba(64, 64, 66, 0.2);
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 8.6%;
    width: 0;
    height: 0;
    border: 24px solid transparent;
    border-bottom-color: #fef9f9;
    border-top: 0;
    border-left: 0;
    margin-left: -12px;
    margin-top: -24px;
  }
`

const Content = styled.ul`
  margin: 0;
  padding: 0;

  & > li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    height: 2.8125rem;
    font-size: 12px;
    font-size: 0.75rem;
    cursor: pointer;

    &:hover {
      background-color: #ffbbda;
    }

    & > div {
      background-color: black;
      border-radius: 0.5rem;
      width: 0.3125rem;
      height: 0.5rem;
      margin-right: 0.25rem;
    }
  }
`

const HeaderMenu = () => {
  return (
    <Container>
      <Content>
        <li>
          <div />
          營養小百科
        </li>
        <li>
          <div />
          寵物觀察日記
        </li>
        <li>
          <div />
          飯飯學問大
        </li>
      </Content>
    </Container>
  )
}

export default HeaderMenu