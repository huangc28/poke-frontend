import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  & > span {
    font-size: 0.75em;
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

  & > span {
    font-size: 0.75em;
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
          articles.map(article => (
            <div>
              <ArticleContainer>
                <img src={article.link} />
                <ArticleStatusBar>
                  <LikeContainer>
                    <img src={LoveImg} />
                    <span>
                      {article.likes}
                    </span>
                  </LikeContainer>
                  <ReadContainer>
                    <img src={ReadImg} />
                    <span>
                      {article.read}
                    </span>
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