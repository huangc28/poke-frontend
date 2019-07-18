import React from 'react'
import styled from 'styled-components'

import Deer from './images/04.png'
import BearChild from './images/05.png'
import BGImg from './images/06.png'
import Moscot from './images/03.png'

const Section = styled.section`
  position: relative;
  padding-top: 9.75rem;
  display: flex;
  flex-direction: row;
  background: url(${BGImg}) no-repeat center center fixed;
  background-size: cover;
  background-color: #f5f2f4;
  width: 100%;
  height: 29.25rem;
  box-sizing: border-box;
  overflow: hidden;
`

const ImgContainerOne = styled.div`
  flex-grow: 2;
  display: inline-flex;
  justify-content: flex-end;
  padding-bottom: 2.125rem;
`

const StuffOne = styled.div`
  flex-grow: 0.1;
`

const ImgContainerTwo = styled.div`
  flex-grow: 2;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const ImgContainerThree = styled.div`
  flex-grow: 1;
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 4rem;
`

const Slogen = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 2.9375rem;
`

const HomeSecOne = () => {
  return (
    <Section>
      <ImgContainerOne>
        <img src={Moscot} />
      </ImgContainerOne>

      <ImgContainerTwo>
        <img src={Deer} />
      </ImgContainerTwo>

      <ImgContainerThree>
        <img src={BearChild} />
      </ImgContainerThree>

      <StuffOne />

      <Slogen>
        懂他，選擇最適合的愛給他
      </Slogen>
    </Section>
  )
}

export default HomeSecOne