import React from 'react'
import { storiesOf } from '@storybook/react'

import DoubleInput from './DoubleInput'

storiesOf('Product', module)
  .add('Product DoubleInput', () => (
    <div style={{ position: 'relative', width: 500, height: 100 }}>
        <DoubleInput 
            options1={[
                <option>產地</option>,
                <option>包裝大小</option>
            ]}
    
            options2={[
                <option>低至高</option>,
                <option>高至低</option>
            ]}
        />
    </div>
  ))