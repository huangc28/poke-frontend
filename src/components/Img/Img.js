import React from 'react'
import T from 'prop-types'


const buildFallbackImg = (width, height) => `https://via.placeholder.com/${width}x${height}`

const Img = ({ src, fallbackImgWidth, fallbackImgHeight, alt }) => {

  const fallbackImgURL = buildFallbackImg(fallbackImgWidth, fallbackImgHeight)

  return (
    <object data={fallbackImgURL} type='image/png'>
      <img
        src={src}
        alt={alt}
      />
    </object>
  )
}

Img.propTypes = {
  src: T.string,
  fallbackImgWidth: T.number,
  fallbackImgHeight: T.number,
  alt: T.string,
}

Img.defaultProps = {
  src: '',
  fallbackImgWidth: 100,
  fallbackImgHeight: 100,
  alt: 'article image',
}

export default Img