import React from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'

import Desktop from './images/01.png'

const Section = styled.div`
  font-family: MicrosoftJhengHei;
  position: relative;

  @media all and (min-width: 577px) and (min-height: 577px) {
    background: url(${Desktop}) no-repeat right top;
    background-size: cover;
    width: 100%;
    margin: 0px;
    padding: 0px;
    height: 38rem;
  }
`

const DeskDiv = styled.div`  
  @media all and (max-width: 576px), all and (max-height: 576px) {
    display: none;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    position: absolute;
    margin-top: 140px;
    margin-left: 60px;
    width: 400px;
    line-height: 1.57;
    letter-spacing: 1.4px;
    color: ${colors.prussianBlue};

    & hr {
        border: solid 1px;
    }
  }
`

const MobileDiv = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    & > *:not(img) {
      padding: 15px;
      font-size: 14px;
      line-height: 1.43;
      letter-spacing: 1.05px;
      color: ${colors.prussianBlue}
    }
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    display: none;
  }
`


function AboutSecOne () {
    return (
        <Section>
            <DeskDiv>
              <h1 style={{'font-size': '18px'}}>剝殼理念</h1>
              <hr/>
              <p>
                “蛋” - 生命力、營養豐富<br/>
                象徵我們的服務及傳遞知識的意象<br/>
                <br/>
                “蛋” - 平衡、穩定<br/>
                藉由剝殼計畫的服務讓飼主和寵物達到適合且平衡的關係<br/>
              </p>
            </DeskDiv>
            <MobileDiv>
            <img src={Desktop} style={{ display: 'block', width: '100%' }}/>
            <h1 style={{'font-size': '18px'}}>剝殼理念</h1>
            <p>
                “蛋” 有養心安神、平衡穩定的意象<br/>
                這象徵我們的精神 ”懂他，選擇最適合的愛給<br/>
                他”唯有適合才能達到平衡的關係<br/>
                <br/>
                “蛋” 是生命力也是營養豐富的食物<br/>
                這表達出我們的正向能量、專業知識等服務<br/>
                <br/>
                我們的計畫是給每隻寵物獲得最基本的飲食照護<br/>
                ，能讓飼主和寵物達到穩定長久的關係期盼這 <br/>
                “計畫” 能 “剝殼” 而出，而剝殼後的 ”蛋”<br/>
                能分享給更多人<br/>
            </p>
            </MobileDiv>
        </Section>
    )
}

export default AboutSecOne