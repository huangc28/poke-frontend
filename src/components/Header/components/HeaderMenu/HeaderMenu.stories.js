import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderMenu from './HeaderMenu'

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
    <HeaderMenu />
  ))