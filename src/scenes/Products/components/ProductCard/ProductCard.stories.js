import React from 'react'
import { storiesOf } from '@storybook/react'

import ProductCard from './ProductCard'

storiesOf('Product', module)
  .add('Product Card', () => (
    <ProductCard 
        branch="Nourish life 天然密碼"
        product="Pro低敏成犬乾飼料"
        stars="3"
        
        portein="0.4"
        porteinLevel="3"
        
        fat="0.1"
        fatLevel="1"

        omega="0.15"
        omegaLevel="2"

        cellulose="0.05"
        celluloseLevel="1"

        calcium="0.05"
        calciumLevel="1"

        phosphorus="0.06"
        phosphorusLevel="1"

        taurine="0.02"
        taurineLevel="1"

        like={true}
    />
  ))