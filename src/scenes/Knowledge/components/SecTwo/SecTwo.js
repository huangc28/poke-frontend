import React from 'react'
import styled from 'styled-components'

import { size12Mixin, size14Mixin, size20Mixin, size26Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'
import { Account as AccIcon, MagnifyIcon } from '@poke/components/Icons'

const Section = styled.section`
  background-color: ${colors.pickledBluewood};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.75rem 0;
`


const Pin = styled.div`
  width: 0.3125rem;
  height: 0.9375rem;
  border: solid 1px white;
  background-color: white;
  border-radius: 4px;
  margin-right: 0.625rem;
`

const Topic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.6875rem;
`

const Left = styled.div`
  margin-right: 1.875rem;

  & > p {
    ${size20Mixin}
    color: ${colors.white};
    margin: 0;
  }
`

const IntroContainer = styled.div`
  float: left;
`

const Title = styled.p`
  ${size26Mixin}
  color: ${colors.white};
  margin: 0;
`

const Right = styled.div`
  width: 18.5625rem;
  padding-top: 4.5rem;
  display: flex;
  flex-direction: column;
`

const ArticleStat = styled.div`
  display: flex;
  margin-top: 1.5rem;
`

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  & > p {
    ${size12Mixin}
    margin: 0 0 0 0.25rem;
    color: ${colors.white}
  }
`

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Summary = styled.p`
  ${size14Mixin}
  color: ${colors.white};
  margin: 1.625rem 0 0 0;
`

const More = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 2.25rem 0 0 0;
`

const SecTwo = () => {
  return (
    <Section>
      <Left>
        <Topic>
          <Pin/>
          <p>
            營養小百科
          </p>
        </Topic>

        <IntroContainer>
          <img
            src='https://via.placeholder.com/920x480'
          />
        </IntroContainer>
        <div style={{ clear: 'both' }} />
      </Left>

      <Right>
        <Title>
          必備胺基酸寵物必備胺基酸寵物必備胺基酸
        </Title>

        <ArticleStat>
          <Stat>
            <AccIcon
              fontSize='small'
            />
            <p>
              2days
            </p>
          </Stat>

          <Stat>
            <MagnifyIcon
              fontSize='small'
            />
            <p>
              999
            </p>
          </Stat>
        </ArticleStat>

        <SummaryContent>
          <Summary>
            必備胺基酸寵物必備胺基酸寵物必備寵
            物必備胺基酸胺基酸寵物必備胺基酸寵
            物必備胺基酸寵物必備胺基酸寵物必備
            胺基酸寵物必備胺基酸寵物必備
            胺基酸
          </Summary>

          <More>
            <Stat>
              <AccIcon
                fontSize='small'
              />
              <p>
                more
              </p>
          </Stat>

          </More>
        </SummaryContent>
      </Right>
    </Section>
  )
}

export default SecTwo