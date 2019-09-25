import React from 'react'
import T from 'prop-types'


const buildFallbackImg = (width, height) => `https://via.placeholder.com/${width}x${height}`


const Source = ({ fallbackImgWidth, fallbackImgHeight, ...props }) => {
  const fallbackImgURL = props.srcSet || buildFallbackImg(fallbackImgWidth, fallbackImgHeight)
  return (
    <source
      {...props}
      style={{width: fallbackImgWidth, height: fallbackImgHeight}}
      srcSet={fallbackImgURL}
    />
  )
}

Source.propTypes = {
  srcSet: T.string,
  fallbackImgWidth: T.number,
  fallbackImgHeight: T.number,
}

Source.defaultProps = {
  srcSet: '',
  fallbackImgWidth: 100,
  fallbackImgHeight: 100,
}

export default Source