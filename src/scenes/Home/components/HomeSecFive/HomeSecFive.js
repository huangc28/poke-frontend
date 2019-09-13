import React from 'react'
import styled from 'styled-components'

import StepFlagImg from './images/32.png'
import Mascot from './images/12.png'
import MascotS from './images/12_s.png'
import FunnelImg from './images/48.png'

import { size14Mixin } from '@poke/styles/font'
import CaptionText from '@poke/components/CaptionText'
import Button from '@poke/components/Button'

const StepFlag = styled.img`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none
  }
  @media (min-width: 577px) and (min-height: 577px) {
    position: absolute;
    top: 0%;
    right: 0%;   
  }
`

const Section = styled.section`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    padding: 30px 20px 0px 20px
  }
  @media (min-width: 577px) and (min-height: 577px) {
    display: flex;
    width: 100%;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0 2.5rem 0;
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
  }
`

const Container = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    transform: scaleY(-1);
    & > * {
        transform: scaleY(-1);
    }
  }
  @media (min-width: 577px) and (min-height: 577px) {
    display: flex;
  }
`

const Left = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  
  }
  @media (min-width: 577px) and (min-height: 577px) {  
    display: flex;
    flex-direction: column;
    margin-right: 5.5rem;
    justify-content: space-between;
  }
`

const LeftBottom = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  
  }
  @media (min-width: 577px) and (min-height: 577px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

const CaptionContainer = styled.div``

const Right = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  
  }
  @media (min-width: 577px) and (min-height: 577px) {  
    display: flex;
    flex-direction: column;
  }
`

const P = styled.p`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    & > br {
      display: none;
    }
    color: #3c4e6b;
  }
  @media (min-width: 577px) and (min-height: 577px) {
    ${size14Mixin}
    margin-top: 0;
    line-height: 1.57;
  }
`

const DesktopDiv = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (min-height: 577px) {
  }
`
const MobileDiv = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
  }
  @media (min-width: 577px) and (min-height: 577px) {
    display: none;
  }
`


const HomeSecFive = () => {
  return (
    <Section>
      <StepFlag src={StepFlagImg} />
      <Container>
        {/* Left part */}
        <Left>
          <CaptionContainer>
            <CaptionText
              flag='02'
              title='剝殼篩選器'
              highLights={[
                '整合雜亂的寵物食品資訊',
                '建立快速方便的篩選工具',
              ]}
            >
              <P>
                還在為挑選產品而煩惱？ <br />
                對特定品牌有不好的回憶？ <br />
                抑或是心中有鍾愛的品牌想支持呢？ <br />
                POKE篩選器 讓你在 <br />
                最短的時間！找到最適合！
              </P>
            </CaptionText>
          </CaptionContainer>

          <LeftBottom>
            <DesktopDiv>
              <div>
                <Button
                  text='coming soon'
                >
                  <img
                    width={40}
                    height={56}
                    src={FunnelImg}
                  />
                </Button>
              </div>
            </DesktopDiv>
            <MobileDiv>
              <Button text='了解更多' size='block' theme='gray'></Button>
            </MobileDiv>
          </LeftBottom>
        </Left>

        {/* Right part */}
        <Right>
          <picture>
            <source media="(max-width: 576px)" srcset={MascotS}/>
            <source media="(min-width: 577px)" srcset={Mascot}/>
            <img src={Mascot} style={{ display:'block', margin:'20px auto' }}/>
          </picture>
        </Right>
      </Container>
    </Section>
  )
}

export default HomeSecFive