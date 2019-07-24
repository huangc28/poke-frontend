import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { size12 } from '@poke/styles/font'

import leftArrowImg from './images/17.png'
import rightArrowImg from './images/18.png'
import LoveImg from './images/19.png'
import ReadImg from './images/20.png'

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

const ArticleContainer = styled.div`
  width: 11.3125rem;
  height: 9.0625rem;
  display: flex;
  flex-direction: column;
`

const ArticleStatusBar = styled.div`
  width: 100%;
  height: 1.375rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Span = size12(styled.span``)

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0.25rem;

  & > img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }
`

const ReadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
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
        {
          articles.map((article, index) => (
            <div key={index}>
              <ArticleContainer>
                <img src={article.link} />
                <ArticleStatusBar>
                  <LikeContainer>
                    <img src={LoveImg} />
                    <Span>
                      {article.likes}
                    </Span>
                  </LikeContainer>
                  <ReadContainer>
                    <img src={ReadImg} />
                    <Span>
                      {article.read}
                    </Span>
                  </ReadContainer>
                </ArticleStatusBar>
              </ArticleContainer>
            </div>
          ))
        }
      </Slider>
    </SliderContainer>
  )
}


ArticleSlider.propTypes = {
  width: PropTypes.number,
}

ArticleSlider.defaultProps = {
  width: 862,
}

export default ArticleSlider