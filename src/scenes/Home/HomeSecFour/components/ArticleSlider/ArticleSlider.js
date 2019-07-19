import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  & > .slick-slider > .slick-prev:before {
    content: none;
  }

  & > .slick-slider > .slick-next:before {
    content: none;
  }
`

const ArticleSlider = ({ width }) => {
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
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </SliderContainer>
  )
}


ArticleSlider.propTypes = {
  width: PropTypes.number,
}

ArticleSlider.defaultProps = {
  width: 600,
}

export default ArticleSlider