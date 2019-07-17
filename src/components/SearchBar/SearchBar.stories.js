import React from 'react'
import { storiesOf } from '@storybook/react'

import SearchBar from './SearchBar'

storiesOf('Search Bar', module)
  .add('Search Bar', () => (
    <SearchBar />
  ))
