import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: grid;
  grid-template-columns: 72.5% 27.5%;
`

const SecThree = () => {
  return (
    <Section>
      <div>
        one
      </div>
      <div>
        two
      </div>
    </Section>
  )
}

export default SecThree