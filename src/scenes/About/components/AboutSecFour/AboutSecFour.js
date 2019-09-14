import React from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'

import LeftImg from './images/07.png'
import RightImg from './images/08.png'

const Section = styled.div`
  margin: 0px;
  background-color: ${colors.white};
  
  @media all and (max-width: 576px), all and (max-height: 576px) {
    padding: 15px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    padding: 70px 10vw;
  }
`
const Title = styled.div`
  color: ${colors.prussianBlue};
  & > hr {
    border: solid 1px;
  }
  @media all and (max-width: 576px), all and (max-height: 576px) {
    
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    font-size: 26px;
  }
`
const Content = styled.div`
  display: flex;
  position: relative;
  @media all and (max-width: 576px), all and (max-height: 576px) {
    margin: 60px 0px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    margin: 100px 0px;  
  }
`
const Stuff = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    visibility: hidden;
    height: 70vh;
    margin: 0px;
    padding: 0px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    visibility: hidden;
    height: 130px;
    margin: 0px;
    padding: 0px;
  }
`

const Line = styled.div`
  border-radius: 10px;
  
  @media all and (max-width: 576px), all and (max-height: 576px) {
    border: solid 5px ${colors.prussianBlue};
    width: 0px;
    height: 70vh;
    position: absolute;
    left: 30%;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    border: solid 10px ${colors.prussianBlue};
    width: 85%;
    height: 0px;
    position: absolute;
    top: 50%;
    left: 7%;
  }
`

const LeftImage = styled.img`
  position: absolute;
  left: 0px;

  @media all and (max-width: 576px), all and (max-height: 576px) {
    top: 40%;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
  }
`
const RightImage = styled.img`
  position: absolute;
  right: 0px;

  @media all and (max-width: 576px), all and (max-height: 576px) {
    top: 40%;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
  }
`

function AboutSecFour () {
    return (
        <Section>
          <Title>
            <h3>剝殼POKE 里程碑</h3>
            <hr/>
          </Title>
          <Content>
            <LeftImage src={LeftImg}/>
            <Stuff>This is None Visible stuff</Stuff>
            <Line></Line>
            <RightImage src={RightImg}/>
          </Content>
        </Section>
    )
}

export default AboutSecFour