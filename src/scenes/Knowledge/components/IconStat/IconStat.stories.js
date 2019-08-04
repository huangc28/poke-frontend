import React from 'react'
import { storiesOf } from '@storybook/react'
import Account from '@material-ui/icons/Person'

import colors from '@poke/styles/colors'

import IconStat, { blackTheme } from './IconStat'

const darkThemeStyles = {
  height: 200,
  display: 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'backgroundColor': colors.pickledBluewood,
}

const brightThemeStyles = {
  ...darkThemeStyles,
  'backgroundColor': colors.white,
}

const IconStatDarkDecorator = storyFn => <div style={darkThemeStyles}>{storyFn()}</div>
const IconStatBrightDecorator = storyFn => <div style={brightThemeStyles}>{storyFn()}</div>

storiesOf('Knowledge/IconStat', module)
  .addDecorator(IconStatDarkDecorator)
  .add('IconStat with white theme', () => (
    <IconStat
      icon={<Account />}
      text='2 days ago'
    />
  ))

storiesOf('Knowledge/IconStat', module)
  .addDecorator(IconStatBrightDecorator)
  .add('IconStat with black theme', () => (
    <IconStat
      theme={blackTheme}
      icon={<Account/>}
      text='2 days ago'
    />
  ))