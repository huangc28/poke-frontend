import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import CaptionText from './CaptionText'
import MascotImg from './images/11.png'

const P = styled.p`
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 1.57;
`

const Mascot = styled.img`
  position: absolute;
  left: 52%;
  top: 22%;
`

storiesOf('Caption Text', module)
  .add('Normal State', () => {
    const highLights = [
      '專業科學的背景',
      '提供優質易懂的 『寵物飲食文章』',
    ]

    return (
      <CaptionText
        title='剝殼小百科'
        highLights={highLights}
      >
        <P>
          寵物飲食 <br />
          一門博大精深的領域 <br />
          但我們期許自己 <br />
          能以不斷精進的精神 <br />
          提供寵物飲食的專業 <br />
          讓你我、他 <br />
          一起成長!一起茁壯!
        </P>
      </CaptionText>
    )
  })
  .add('Caption with image', () => {
    const highLights = [
      '專業科學的背景',
      '提供優質易懂的 『寵物飲食文章』',
    ]

    return (
      <CaptionText
        title='剝殼小百科'
        highLights={highLights}
        img={<Mascot src={MascotImg} />}
      >
        <P>
          寵物飲食 <br />
          一門博大精深的領域 <br />
          但我們期許自己 <br />
          能以不斷精進的精神 <br />
          提供寵物飲食的專業 <br />
          讓你我、他 <br />
          一起成長!一起茁壯!
        </P>
      </CaptionText>
    )
  })

