import React from 'react'
import { storiesOf } from '@storybook/react'
import Magnifier from '@material-ui/icons/Search'

import SearchBar from './SearchBar'

storiesOf('Search Bar', module)
  .add('Search bar with icon', () => (
    <SearchBar
      icon={<Magnifier />}
    />
  ))
  .add('Search bar without icon and disabled', () => (
    <SearchBar
      disabled
      placeholder='huangchiheng@gmail.com'
    />
  ))
