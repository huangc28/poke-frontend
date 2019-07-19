import React from 'react'
import styled from 'styled-components'

import Moscot from './images/10.png'
import ConfusedMan from './images/11.png'

const Section = styled.section`
  padding-top: 2.125rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 38.25rem;
  align-items: center;
`
const PokePediaContainer = styled.div`
  display: flex;
  align-items: center;
`

const MoscotContainer = styled.div`
  display: inline-block;
  margin-right: 5.625rem;
`

const TextContainer = styled.div`
  display: inline-block;
  vertical-align: center;
  & > h3 {
    margin: 0 0 0.25rem 0;
    border-bottom: solid 1px;
    width: 18.125rem;
  }

  & > ul {
    padding-left: 1.125rem;
    margin: 0.5rem 0 0.625rem 0;
    list-style-type: square;
  }

  & > ul > li {
    color: #ff85b1;
    font-weight: bold;
    font-size: 0.875rem;
  }

  & > ul > li > span {
    line-height: 1.8;
  }
`

const PokePediaDescContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  & > img {
    position: absolute;
    left: 52%;
    top: 22%;
  }
`

const PokePediaDesc = styled.p`
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 1.57;
`

const ArticlesContainer = styled.div`
  height: 14.375rem;
  width: 100%;
  background-color: #f2f2f2;
`

const articles = [

]

const HomeSecFour = () => {
  return (
    <Section>
      <PokePediaContainer>
        {/* Poke moscot */}
        <MoscotContainer>
          <img src={Moscot} />
        </MoscotContainer>

        <TextContainer>
          <h3>
            剝殼小百科
          </h3>
          <ul>
            <li>
              <span> 專業科學的背景 </span>
            </li>
            <li>
              <span> 提供優質易懂的 『寵物飲食文章』</span>
            </li>
          </ul>
          <PokePediaDescContainer>
            <PokePediaDesc>
              寵物飲食 <br />
              一門博大精深的領域 <br />
              但我們期許自己 <br />
              能以不斷精進的精神 <br />
              提供寵物飲食的專業 <br />
              讓你我、他 <br />
              一起成長!一起茁壯!
            </PokePediaDesc>

            <img src={ConfusedMan} />
          </PokePediaDescContainer>
        </TextContainer>
      </PokePediaContainer>
      <ArticlesContainer>
        some articles
      </ArticlesContainer>
    </Section>
  )
}

export default HomeSecFour