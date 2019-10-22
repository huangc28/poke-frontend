import React from 'react'
import { storiesOf } from '@storybook/react'

import FunctionBtn from './FunctionBtn'

storiesOf('Product', module)
  .add('Product FunctionBtn heart', () => (
    <FunctionBtn 
        fa="heart"
        word="加入商品收藏"
    />
  ))
  .add('Product FunctionBtn note', () => (
    <FunctionBtn 
        fa="note"
        word="加入篩選紀錄"
    />
  ))