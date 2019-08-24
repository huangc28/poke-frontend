import React from 'react'
import { storiesOf } from '@storybook/react'
import Account from '@material-ui/icons/Person'

import colors from '@poke/styles/colors'

import IconLabel, { blackTheme } from './IconLabel'

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

storiesOf('Knowledge/IconLabel', module)
  .addDecorator(IconStatDarkDecorator)
  .add('IconLabel with white theme', () => (
    <IconLabel
      icon={<Account />}
      text='2 days ago'
    />
  ))

storiesOf('Knowledge/IconLabel', module)
  .addDecorator(IconStatBrightDecorator)
  .add('IconLabel with black theme', () => (
    <IconLabel
      theme={blackTheme}
      icon={<Account/>}
      text='2 days ago'
    />
  ))