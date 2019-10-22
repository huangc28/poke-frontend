import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router';



import SingleProduct from './SingleProduct'
import { Route } from '@storybook/router';

storiesOf('scenes', module)
  .add('Single Product', () => {
    return (
      <SingleProduct />
    )
  })