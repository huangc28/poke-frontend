import React from 'react'
import styled from 'styled-components'

import StepFlagImg from './images/33.png'
import PlusImg from './images/49.png'
import MoscotImg from './images/14.png'

import colors from '@poke/styles/colors'
import CaptionText from '@poke/components/CaptionText'
import Button from '@poke/components/Button'

const Section = styled.section`
  position: relative;
  background-color: ${colors.athensGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.3125rem 0 3.75rem 0;
  box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
`

const StepFlag = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
`

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  margin-right: 4.125rem;
`

const P = styled.p`
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

const HomeSecSix = () => {
  return (
    <Section>
      <StepFlag src={StepFlagImg} />
      <Container>
        <Left>
          <iframe
            width='429'
            height='226'
            src='https://www.youtube.com/embed/iPW75ZO4pIA'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Left>

        <Right>
          <CaptionText
            title='剝殼影片'
            highLights={[
              '整合雜亂的寵物食品資訊',
              '建立快速方便的篩選工具',
            ]}
            img={<Moscot src={MoscotImg} />}
          >
            <P>
              影片影片影片影片影片影片 <br/>
              影片影片影片
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
        </Right>
      </Container>
    </Section>
  )
}

export default HomeSecSix
