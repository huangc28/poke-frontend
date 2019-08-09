import React from 'react'
import { storiesOf } from '@storybook/react'

import Paginator from './Paginator'

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const CenterDecorator = storyFn => <div style={styles}> { storyFn() } </div>

storiesOf('Paginator', module)
  .addDecorator(CenterDecorator)
  .add('Paginator', () => {
    return (
      <Paginator
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={15}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={() => {
          console.log('trigger page change')
        }}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    )
  })