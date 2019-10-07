import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router';



import SingleArticle from './SingleArticle'
import { Route } from '@storybook/router';

storiesOf('scenes', module)
  .addDecorator(StoryRouter())
  .add('Single Articles', () => {
    return (
      <SingleArticle />
    )
  })