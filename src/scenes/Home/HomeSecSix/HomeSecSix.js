import React from 'react'
import styled from 'styled-components'

import StepFlagImg from './images/33.png'
import PlusImg from './images/49.png'

import CaptionText from '../../../components/CaptionText'
import Button from '../../../components/Button'

const Section = styled.section`
  position: relative;
  background-color: #e8e8e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.3125rem 0 3.875rem 0;
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
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </Left>

        <Right>
          <CaptionText
            title='剝殼影片'
            highLights={[
              '整合雜亂的寵物食品資訊',
              '建立快速方便的篩選工具',
            ]}
          >
            <P>
              影片影片影片影片影片影片 <br/>
              影片影片影片
            </P>
          </CaptionText>
          <ButtonContainer>
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
          </ButtonContainer>
        </Right>
      </Container>
    </Section>
  )
}

export default HomeSecSix
