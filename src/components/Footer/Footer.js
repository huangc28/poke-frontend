import React from 'react'
import styled from 'styled-components'

import colors from '@poke/styles/colors'

import YoutubeIcon from './images/23.png'
import GooglePlusIcon from './images/24.png'
import FacebookIcon from './images/25.png'
import BasketIcon from './images/26.png'
import TwitterIcon from './images/27.png'
import InstagramIcon from './images/28.png'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
`

const Upper = styled.div`
  width:100%;
  background-color: ${colors.fiord};
  color: ${colors.osloGray};
  display: flex;
  justify-content: center;
  padding: 1.625rem 0 1rem 0;

  & > p {
    margin: 2rem 0 0 0.75rem;
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colors.cloudBurst};
  color: ${colors.robinsEggBlue};
  padding: 1.375rem 0 1.125rem 0;

  & > p {
    margin: 0;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`

const HRContainer = styled.div`
  display: flex;
  & > hr {
    width: 4.125rem;
  }
`

const Title = styled.h1`
  margin: 0;
  color: ${colors.robinsEggBlue};
  margin-right: 1.125rem;
  white-space: nowrap;
`

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.875rem;
  margin-right: 2rem;
`

const GetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.25rem;
  margin-right: 4.25rem;
`

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.625rem;
`

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.75rem;

  & > img {
    margin-right: 0.25rem;
  }
`

const icons = [
  YoutubeIcon,
  GooglePlusIcon,
  FacebookIcon,
  BasketIcon,
  TwitterIcon,
  InstagramIcon,
]

const Footer = () => {
  return (
    <FooterContainer>
      <Upper>
        <AboutUs>
          <TitleContainer>
            <Title>
              About us
            </Title>

            <HRContainer>
              <hr/>
            </HRContainer>
          </TitleContainer>

          <p>
            something about us
          </p>
        </AboutUs>

        <GetInTouch>
          <TitleContainer>
            <Title>
              Get in touch
            </Title>

            <HRContainer>
              <hr/>
            </HRContainer>
          </TitleContainer>

          <p>
            hello world
          </p>
        </GetInTouch>

        <SocialMedia>
          <TitleContainer>
            <Title>
              Social Media
            </Title>

            <HRContainer>
              <hr/>
            </HRContainer>
          </TitleContainer>

          <p>
            some social media text!!
          </p>

          <SocialMediaIcons>
            {
              icons.map((icon, index) =>
                <img
                  key={index}
                  src={icon}
                />
              )
            }
          </SocialMediaIcons>
        </SocialMedia>
      </Upper>

      <Bottom>
        <p>
          Copyright © POKE
        </p>
      </Bottom>
    </FooterContainer>
  )
}

export default Footer
