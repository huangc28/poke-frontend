import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import compose from '@poke/util/compose'
import { size14 } from '@poke/styles/font'
import colors from '@poke/styles/colors'

const Li = compose(size14)(styled.li`
  color: ${colors.tickleMePink};
`)

const Container = styled.div`
  @media (max-width: 576px) {
    & > h3 {
      width: 18.125rem;
      color: #3c4e6b;
    }
    & > h3:before {
        content: "${props => props.flag}";
        margin-right: 10px;
    }
    & > ul {
        padding-left: 10px;
        list-style-type: none;
        line-height: 1.63;
        font-weight: bold;
    }
    & > ul > li:before {
        content: '-  '
    }
  }
  @media (min-width: 577px) {
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
  
    & > ul > li > span {
      line-height: 1.8;
    }
  }
`

const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`

const DesktopDiv = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 577px) {
  }
`


const CaptionText = ({flag, title, highLights, img, children }) => {
  return (
    <Container flag={flag}>
      <h3>
        { title }
      </h3>
      {
        highLights.length > 0 && (
          <ul>
            {
              highLights.map((elem, index) => (
                <Li key={index}>
                  <span> {elem} </span>
                </Li>
              ))
            }
          </ul>
        )
      }
      <DescContainer>
        { children }
        <DesktopDiv>
          { img }
        </DesktopDiv>
      </DescContainer>
    </Container>
  )
}

CaptionText.propTypes = {
  flag: PropTypes.string,
  title: PropTypes.string,
  highLights: PropTypes.arrayOf(PropTypes.string),
  Img: PropTypes.element,
}

CaptionText.defaultProps = {
  flag: '01',
  title: '',
  highLights: [],
  Img: null,
}

export default CaptionText