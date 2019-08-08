import React from 'react'
import { storiesOf } from '@storybook/react'

import LargeIntro from './LargeIntro'

storiesOf('Knowledge/Intros', module)
  .add('Large Intro', () => {
    return (
      <LargeIntro
        img={
          <img
            width={600}
            height={420}
            src='https://via.placeholder.com/600x420'
          />
        }
        bannerText='必備胺基酸-寵物必備胺基酸寵物必備胺基酸'
      />
    )
  })