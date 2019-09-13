import React from 'react'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

import YoutubeIcon from './images/23.png'
import GooglePlusIcon from './images/24.png'
import FacebookIcon from './images/25.png'
import BasketIcon from './images/26.png'
import TwitterIcon from './images/27.png'
import InstagramIcon from './images/28.png'

import FacebookIconS from './images/fbfb.png'
import InstagramIconS from './images/IGIG.png'

const FooterContainer = styled.footer`
  @media (max-width: 576px) {
    display: block;
    margin-top: 30px;
  }
  @media (min-width: 577px) {
    display: flex;
    flex-direction: column;
  }
`

const Upper = styled.div`
  @media (max-width: 576px) {
    background-color: ${colors.prussianBlue};
  }
  @media (min-width: 577px) {
    width:100%;
    background-color: ${colors.fiord};
    color: ${colors.osloGray};
    display: flex;
    justify-content: center;
    padding: 1.625rem 0 1rem 0;

    & > p {
    margin: 2rem 0 0 0.75rem;
    }
  }
`

const Bottom = styled.div`
  @media (max-width: 576px) {
    background-color: ${colors.prussianBlue};
    justify-content: center;
    width: 100%;
    display: flex;
    padding: 1.375rem 0 1.125rem 0;
    color: ${colors.softWhite};
    font-size: 12px;
    font-weight: 300;
    line-height: 1.25;
  }
  @media (min-width: 577px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${colors.cloudBurst};
    color: ${colors.robinsEggBlue};
    padding: 1.375rem 0 1.125rem 0;
  }
  & > p {
    margin: 0;
  }
`

const TitleContainer = styled.div`
  @media (max-width: 576px) {
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (min-width: 577px) {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  }
`

const HRContainer = styled.div`
  @media (max-width: 576px) {
    display: flex;
    & > hr {
        width: 120px;
        color: ${colors.gainsboro}
    }
  }
  @media (min-width: 577px) {
    display: flex;
    & > hr {
      width: 4.125rem;
    }
  }
`

const Title = styled.h1`
  @media (max-width: 576px) {
    text-align: center;
    margin: 0;
    color: ${colors.white};
    font-size: 18px;
    font-weight: 300;
    line-height: normal;
  }
  @media (min-width: 577px) {
    margin: 0;
    color: ${colors.robinsEggBlue};
    margin-right: 1.125rem;
    white-space: nowrap;
  }
`

const AboutUs = styled.div`
  @media (max-width: 576px) {
    
  }
  @media (min-width: 577px) {
    display: flex;
    flex-direction: column;
    width: 15.875rem;
    margin-right: 2rem;
  }
`

const GetInTouch = styled.div`
  @media (max-width: 576px) {
  }
  @media (min-width: 577px) {
    display: flex;
    flex-direction: column;
    width: 13.25rem;
    margin-right: 4.25rem;
  }
`

const SocialMedia = styled.div`
  @media (max-width: 576px) {
  
  }
  @media (min-width: 577px) {
    display: flex;
    flex-direction: column;
    width: 16.625rem;
  }
`

const SocialMediaIcons = styled.div`
  @media (max-width: 576px) {
    text-align: center;
  }
  @media (min-width: 577px) {
    display: flex;
    margin-top: 0.75rem;

    & > img {
    margin-right: 0.25rem;
    }
  }
`

const Content = styled.div`
  @media (max-width: 576px) {
    color: ${colors.white};
    text-align: center;
    font-size: 14px;
    line-height: 1.64;
  }
  @media (min-width: 577px) {
    margin: 0px;
    padding: 0px;
  }
`
const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
`

const DesktopDiv = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 577px) {
  }
`
const MobileDiv = styled.div`
  @media (max-width: 576px) {
  }
  @media (min-width: 577px) {
    display: none;
  }
`

const icons = [
    [FacebookIcon, FacebookIconS]
]

const Footer = () => {
  return (
    <FooterContainer>
      <Upper>
        <AboutUs>
          <TitleContainer>
            <Title>關於我們</Title>
            <HRContainer><hr/></HRContainer>
          </TitleContainer>
          <Content>
              <Ul>
                <li><a>剝殼理念</a></li>
                <li><a>網站隱私權</a></li>
                <li><a>消費者條款</a></li>
              </Ul>
          </Content>
        </AboutUs>

        <GetInTouch>
          <TitleContainer>
            <Title>合作提案</Title>
            <HRContainer><hr/></HRContainer>
          </TitleContainer>
          <Content>
            <p>剝殼計畫正在募集：</p>
            <Ul>
              <li>1. 願意瞭解寵物營養的家長</li>
              <li>2. 擁有其它專業知識的人才</li>
              <li>3. 可以同業/異業配合的廠商</li>
            </Ul>
            <p>
              歡迎與我們聯絡！共同讓寵物飲食文化變得更好！<br/>
              聯絡信箱：pokelovestudio0520@gmail.com
            </p>
          </Content>
        </GetInTouch>

        <SocialMedia>
          <TitleContainer>
            <Title>聯絡剝殼</Title>
            <HRContainer><hr/></HRContainer>
          </TitleContainer>
          <Content>
            <Ul>
              <li>工作室名稱：剝殼計畫工作室</li>
              <li>工作室地址：新北市新莊區五工五路9號7樓</li>
              <li>服務時間：週一至週五 10:00-18:00</li>
              <li>服務專線：02-2299-1728</li>
              <li>服務信箱：pokelovestudio0520@gmail.com</li>
            </Ul>
          </Content>
          <SocialMediaIcons>
            {
              icons.map((icon, index) =>
                <picture>
                  <source media="(max-width: 576px)" srcSet={icon[1]}/>
                  <source media="(min-width: 577px)" srcSet={icon[0]}/>
                  <img key={index} src={icon[0]}/>
                </picture>
              )
            }
          </SocialMediaIcons>
        </SocialMedia>
      </Upper>

      <Bottom>
      <DesktopDiv>
        <p>Copyright © POKE</p>
      </DesktopDiv>
      <MobileDiv>
        <p>© 2019 POKE Co.,Ltd All right reserved.</p>
      </MobileDiv>
      </Bottom>
    </FooterContainer>
  )
}

export default Footer
