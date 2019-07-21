import React from 'react'
import styled from 'styled-components'

import StepFlagImg from './images/32.png'
import Mascot from './images/12.png'
import CaptionText from '../../../components/CaptionText'

const StepFlag = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
`

const Section = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5.5rem;
  justify-content: center;
`

const Right = styled.div`

`

const P = styled.p`
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 1.57;
`
const HomeSecFive = () => {
  return (
    <Section>
      <StepFlag src={StepFlagImg} />
      <Container>
        {/* Left part */}
        <Left>
          <CaptionText
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
        </Left>

        {/* Right part */}
        <Right>
          <img src={Mascot} />
        </Right>
      </Container>
    </Section>
  )
}

export default HomeSecFive