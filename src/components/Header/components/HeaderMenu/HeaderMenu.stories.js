import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderMenu, { MenuItem } from './HeaderMenu'

const styles = {
  height: 200,
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
}
const HeaderMenuDecorator = storyFn => <div style={styles}>{storyFn()}></div>

storiesOf('Header Menu', module)
  .addDecorator(HeaderMenuDecorator)
  .add('Header Menu', () => (
    <HeaderMenu>
      <MenuItem
        onClick={evt => {
          console.log('DEBUG TRIGGER')
        }}
      >
        營養小百科
      </MenuItem>
      <MenuItem>
        寵物觀察日記
      </MenuItem>
      <MenuItem>
        飯飯學問大
      </MenuItem>
    </HeaderMenu>
  ))