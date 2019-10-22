import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import { buildApiUrl } from '@poke/services/apis/util'
import LeftImg from './images/07.png'
import RightImg from './images/08.png'
import $ from 'jquery'

const Section = styled.div`
  margin: 0px;
  background-color: ${colors.white};
  
  @media all and (max-width: 576px), all and (max-height: 576px) {
    padding: 15px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    padding: 70px 10vw;
  }
`
const Title = styled.div`
  color: ${colors.prussianBlue};
  & > hr {
    border: solid 1px;
  }
  @media all and (max-width: 576px), all and (max-height: 576px) {
    
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    font-size: 26px;
  }
`
const Content = styled.div`
  display: flex;
  position: relative;
  @media all and (max-width: 576px), all and (max-height: 576px) {
    margin: 60px 0px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    margin: 100px 0px;  
  }
`
const Stuff = styled.div`
  @media all and (max-width: 576px), all and (max-height: 576px) {
    visibility: hidden;
    height: 70vh;
    margin: 0px;
    padding: 0px;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    visibility: hidden;
    height: 130px;
    margin: 0px;
    padding: 0px;
  }
`

const Line = styled.div`
  border-radius: 10px;
  
  @media all and (max-width: 576px), all and (max-height: 576px) {
    border: solid 5px ${colors.prussianBlue};
    width: 0px;
    height: 70vh;
    position: absolute;
    left: 30%;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
    border: solid 10px ${colors.prussianBlue};
    width: 85%;
    height: 0px;
    position: absolute;
    top: 50%;
    left: 7%;
  }
`

const LeftImage = styled.img`
  position: absolute;
  left: 0px;

  @media all and (max-width: 576px), all and (max-height: 576px) {
    top: 40%;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
  }
`
const RightImage = styled.img`
  position: absolute;
  right: 0px;

  @media all and (max-width: 576px), all and (max-height: 576px) {
    top: 40%;
  }
  @media all and (min-width: 577px) and (min-height: 577px) {
  }
`

const Milestones = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: -50px;
`

const MilesMonth = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  color: ${colors.prussianBlue};
`

const MilesCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.grey};
  border-radius: 99999px;
`

const MilesContent = styled.div`
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 3.2px;
  color: ${colors.prussianBlue};
`

export default class AboutSecFour extends Component {
    constructor() {
        super()
        this.state = {
            year: new Date().getFullYear(),
            milestones: []
        }
        this.getMilestone = this.getMilestone.bind(this)
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.title = 'POKE | 關於我們'
        }
        this.getMilestone({ year: this.state.year })
    }

    getMilestone({ year }) {
        let apiUrl = buildApiUrl('milestones', { year })
        $.ajax({
            url: apiUrl,
            method: 'get',
            success: function(data) {
                this.setState({
                    milestones: data.milestones
                })
            }.bind(this),
            error: function(err) {
                throw err
            }.bind(this)
        })
    }

    render() {
        let milestones = this.state.milestones.map(v => {
            let month = new Date(v.created_at).getMonth()
            return (
                <Milestones
                    left={`${100*(month/12)}%`}
                >
                    <MilesMonth>
                        { month+1 }月
                    </MilesMonth>
                    <MilesCircle/>
                    <MilesContent>
                        {v.content}
                    </MilesContent>
                </Milestones>
            )
        })
        return (
            <Section>
              <Title>
                <h3>剝殼POKE 里程碑</h3>
                <hr/>
              </Title>
              <Content>
                <LeftImage src={LeftImg}/>
                <Stuff>This is None Visible stuff</Stuff>
                <Line>
                    <div style={{ position: 'relative' }}>
                        {milestones}
                    </div>
                </Line>
                <RightImage src={RightImg}/>
              </Content>
            </Section>
        )
    }
}