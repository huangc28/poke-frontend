import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import T from 'prop-types'

import { size12 } from '@poke/styles/font'

import leftArrowImg from './images/17.png'
import rightArrowImg from './images/18.png'

const LeftArrow = props => {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img  src={leftArrowImg} />
    </div>
  )
}

const RightArrow = props => {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img  src={rightArrowImg} />
    </div>
  )
}

// @todo maybe expose a compound component
// <ArticleSlider>
//   <ArticleSlide>
//   <ArticleSlide>
// </ArticleSlider>
const SliderContainer = styled.div`
  width: ${props => props.width}px;
  margin: 0 auto;

  & > .slick-slider > .slick-arrow {
    top: 35%;
  }

  & > .slick-slider > .slick-prev {
    left: -65px;
  }

  & > .slick-slider > .slick-prev:before {
    content: none;
  }

  & > .slick-slider > .slick-next:before {
    content: none;
  }
`

// @todo Data should be passed from outside
const articles = [
  {
    link: 'https://via.placeholder.com/181x123.png',
    likes: 817,
    read: 999,
  },
  {
    link: 'https://via.placeholder.com/181x123.png',
    likes: 817,
    read: 999,
  },
  {
    link: 'https://via.placeholder.com/181x123.png',
    likes: 817,
    read: 999,
  },
  {
    link: 'https://via.placeholder.com/181x123.png',
    likes: 817,
    read: 999,
  },
  {
    link: 'https://via.placeholder.com/181x123.png',
    likes: 817,
    read: 999,
  },
]

function ArticleSlider ({ width, children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <SliderContainer
      width={width}
    >
      <Slider {...settings}>
        { children }
      </Slider>
    </SliderContainer>
  )
}


ArticleSlider.propTypes = {
  width: T.number,
  children: T.node,
}

ArticleSlider.defaultProps = {
  width: 862,
}

export default ArticleSlider