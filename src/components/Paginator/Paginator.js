import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';

import { size20Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'

import leftGrey from './images/02.left_gray.png'
import leftPink from './images/02.left_pink.png'
import rightGrey from './images/03.right_gray.png'
import rightPink from './images/03.right_pink.png'

const PaginatorContainer = styled.div`
  ${size20Mixin}
  display: flex;
  align-items: center;
  justify-content: center;

  & > ul:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  & > ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 0.6rem;
  }

  & > ul > li > a:focus {
    outline: none;
  }

  & > ul > .active {
    background-color: ${colors.tickleMePink};
    color: ${colors.white};
  }

  & > ul > li:not(.previous):not(.next) {
    width: 1.875rem;
    height: 1.875rem;
  }

  & > ul > .previous {
    margin-right: 1rem;
  }

  & > ul > .next {
    margin-left: 1rem;
  }
`

const PreviousArrow = styled.div`
  background: url(${({ isActive }) => isActive ? leftPink : leftGrey }) no-repeat right top;
  background-size: 1.875rem 1.875rem;
  width: 1.875rem;
  height: 1.875rem;
`

const NextArrow = styled.div`
  background: url(${({ isActive }) => isActive ? rightPink : rightGrey }) no-repeat right top;
  background-size: 1.875rem 1.875rem;
  width: 1.875rem;
  height: 1.875rem;
`

const PREVIOUS_PAGE_ARROW = 'previous'
const NEXT_PAGE_ARROW = 'next'
// This is a wraper of react-paginate. It wraps the styles (including previous / next label) and behavior
const Paginator = (props) => {
  const [activeArrow, setActiveArrow] = useState('')
  const { onPageChange } = props

  return (
    <PaginatorContainer>
      <ReactPaginate
        {...props}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        onPageChange={onPageChange}
        previousLabel={
          <PreviousArrow
            isActive={activeArrow === PREVIOUS_PAGE_ARROW}
            onClick={() => setActiveArrow(PREVIOUS_PAGE_ARROW)}
          />
        }
        nextLabel={
          <NextArrow
            isActive={activeArrow === NEXT_PAGE_ARROW}
            onClick={() => setActiveArrow(NEXT_PAGE_ARROW)}
          />
        }
      />
    </PaginatorContainer>
  )
}

export default Paginator