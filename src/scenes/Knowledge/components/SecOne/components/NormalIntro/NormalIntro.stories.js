import React from 'react'
import { storiesOf } from '@storybook/react'

import NormalIntro from './NormalIntro'

storiesOf('Knowledge/Intros', module)
  .add('Normal Intro', () => {
    return (
      <NormalIntro
        bannerText='必備胺基酸-寵物必備胺基酸-寵物必基酸寵物必備胺基酸'
      >
        <img
          src='https://via.placeholder.com/300x200'
        />
      </NormalIntro>
    )
  })