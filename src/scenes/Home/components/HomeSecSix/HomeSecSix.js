import React from 'react'
import styled from 'styled-components'

import StepFlagImg from './images/33.png'
import PlusImg from './images/49.png'
import MoscotImg from './images/14.png'

import colors from '@poke/styles/colors'
import CaptionText from '@poke/components/CaptionText'
import Button from '@poke/components/Button'

const Section = styled.section`
  @media (max-width: 576px) {
    display: block;
    padding: 30px 20px 0px 20px
  }
  @media (min-width: 577px) {
    position: relative;
    background-color: ${colors.athensGray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.3125rem 0 3.75rem 0;
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
  }
`

const StepFlag = styled.img`
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 577px) {
    position: absolute;
    top: 0%;
    right: 0%;  
  }
`

const Container = styled.div`
  @media (max-width: 576px) {
    display: block;
  }
  @media (min-width: 577px) {  
    display: flex;
  }
`

const Left = styled.div`
  @media (max-width: 576px) {
    
  }
  @media (min-width: 577px) {
    margin-right: 4.125rem;
    width: 429px;
  }
`

const P = styled.p`
  @media (max-width: 576px) {
    & > br {
        display: none;
    }
  }
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 1.57;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Moscot = styled.img`
  position: absolute;
  left: 52%;
  top: -52%;
`

const MobileDiv = styled.div`
  @media (max-width: 576px) {
  }
  @media (min-width: 577px) {
    display: none;
  }
`


const HomeSecSix = () => {
  return (
    <Section>
      <StepFlag src={StepFlagImg} />
      <Container>
        <Left>
          <iframe
            width='100%'
            height='226'
            src='https://www.youtube.com/embed/iPW75ZO4pIA'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Left>

        <Right>
          <CaptionText
            flag='03'
            title='剝殼影片'
            highLights={[
              '整合雜亂的寵物食品資訊',
              '建立快速方便的篩選工具',
            ]}
            img={<Moscot src={MoscotImg} />}
          >
            <P>
            還在為挑選產品而煩惱？ <br/>
            對特定品牌有不好的回憶？ <br/>
            抑或是心中有鍾愛的品牌想支持呢？ <br/>
            POKE 篩選器，讓你在最短的時間！ <br/>
            找到最適合！<br/>
            </P>
          </CaptionText>
          <ButtonContainer>
            {/* Disable more video button for now */}
            {/*
              <Button
                text='看更多'
                size='small'
                theme='black'
              >
              <img
                height={12}
                width={12}
                src={PlusImg}
              />
              </Button>
            */}
          </ButtonContainer>
          <MobileDiv>
            <Button text='了解更多' size='block' theme='gray'></Button>
          </MobileDiv>
        </Right>
      </Container>
    </Section>
  )
}

export default HomeSecSix
