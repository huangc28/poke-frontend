import React from 'react'
import styled from 'styled-components'

import Deer from './images/04.png'
import BearChild from './images/05.png'
import BGImg from './images/06.png'
import Moscot from './images/03.png'

const Section = styled.section`
  padding-top: 9.75rem;
  display: flex;
  flex-direction: row;
  background: url(${BGImg}) no-repeat center center fixed;
  background-size: cover;
  background-color: #f5f2f4;
  width: 100%;
  height: 29rem;
  box-sizing: border-box;
`

const ImgContainerOne = styled.div`
  flex-grow: 2;
  display: inline-flex;
  justify-content: flex-end;
  padding-bottom: 2.125rem;
`

const StuffOne = styled.div`
  flex-grow: 1;
`

const StuffTwo = styled.div`
  flex-grow: 1;
`

const ImgContainerTwo = styled.div`
  flex-grow: 2;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
`

const ImgContainerThree = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 2.125rem;
`

const HomeSecOne = () => {
  return (
    <Section>
      <ImgContainerOne>
        <img src={Moscot} />
      </ImgContainerOne>

      <StuffOne />

      <ImgContainerTwo>
        <img src={Deer} />
      </ImgContainerTwo>

      <StuffTwo />
  
      <ImgContainerThree>
        <img src={BearChild} />
      </ImgContainerThree>
    </Section>
  )
}

export default HomeSecOne