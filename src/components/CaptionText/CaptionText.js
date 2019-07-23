import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  & > h3 {
    margin: 0 0 0.25rem 0;
    border-bottom: solid 1px;
    width: 18.125rem;
    padding-bottom: 0.3125rem;
  }

  & > ul {
    padding-left: 1.125rem;
    margin: 0.5rem 0 0.625rem 0;
    list-style-type: square;
  }

  & > ul > li {
    color: #ff85b1;
    font-weight: bold;
    font-size: 0.875rem;
  }

  & > ul > li > span {
    line-height: 1.8;
  }
`

const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`

const CaptionText = ({ title, highLights, img, children }) => {
  return (
    <Container>
      <h3>
        { title }
      </h3>
      {
        highLights.length > 0 && (
          <ul>
            {
              highLights.map((elem, index) => (
                <li key={index}>
                  <span> {elem} </span>
                </li>
              ))
            }
          </ul>
        )
      }
      <DescContainer>
        { children }

        { img }
      </DescContainer>
    </Container>
  )
}

CaptionText.propTypes = {
  title: PropTypes.string,
  highLights: PropTypes.arrayOf(PropTypes.string),
  Img: PropTypes.element,
}

CaptionText.defaultProps = {
  title: '',
  highLights: [],
  Img: null,
}

export default CaptionText