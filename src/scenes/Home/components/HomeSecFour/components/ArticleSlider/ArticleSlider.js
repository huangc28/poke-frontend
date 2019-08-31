import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import T from 'prop-types'

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


function ArticleSlider ({ width, children, maxSlidesToShow }) {
  const slidesToShow = children.length >= maxSlidesToShow
    ? MAX_SLIDES_TO_SHOW
    : children.length

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
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

const DEFAULT_MAX_SLIDES_TO_SHOW = 4
const DEFAULT_SLIDER_CONTAINER_WIDTH = 862

ArticleSlider.propTypes = {
  width: T.number,
  children: T.node,
}

ArticleSlider.defaultProps = {
  width: DEFAULT_SLIDER_CONTAINER_WIDTH,
  maxSlidesToShow: DEFAULT_MAX_SLIDES_TO_SHOW,
}

export default ArticleSlider