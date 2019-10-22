import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import { FaHeart } from 'react-icons/fa';
import StarGray from './images/04.star_gray.png'
import StarYellow from './images/04.star_yellow.png'
import $ from 'jquery'

const Container = styled.div`
  width: 320px;
  height: 700px;
  border-radius: 20px;
  background-color: #eeeeee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow:4px 4px 10px ${colors.pink};
  }
`

const ContentContainer = styled.div`
  width: calc(320px - 60px);
  height: 320px;
  background-color: ${colors.prussianBlue};
  padding: 30px;
`

const ContentTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.7px;
  color: ${colors.white};
`

const Star = styled.img`
  margin-right: 10px;
`

const NutrientContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`

const NutrientBox = styled.div`
  align-self: center;
  width: 10%;
  height: 8px;
  border-radius: 4px;
  margin-left: 3px;
  margin-right: 3px;
`

const NutrientText = styled.div`
  width: 20%;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.7px;
  color: ${colors.white};
`

const Heart = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${props => !!props.like ? colors.pink : colors.gray};
  color: ${colors.white};
  border-radius: 99999px;
  font-size: 2rem;
  padding: 8px 7px 0px;
  &:hover {
      background-color: ${colors.pink};
  }
`

export default class ProductCard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }


    render() {
        let stars = [1,2,3,4,5].map((v,i) => {
            return <Star src={this.props.stars >= v ? StarYellow : StarGray}/>
        })

        return (
            <Container>
                <Heart like={this.props.like} ><FaHeart /></Heart>

                <a href={this.props.href}><img style={{ width: 320, height: 380, cursor: 'pointer' }}/></a>
                
                <ContentContainer>
                    <a href={this.props.href} style={{textDecoration: 'none'}}><ContentTitle style={{ cursor: 'pointer' }}>{this.props.branch}</ContentTitle></a>
                    <a href={this.props.href} style={{textDecoration: 'none'}}><ContentTitle style={{ cursor: 'pointer' }}>{this.props.product}</ContentTitle></a>
                    <div style={{ display: 'flex', marginTop: 10 }}>
                        {stars}
                    </div>
                    <hr style={{ marginTop: 10, border: '1px solid colors.prussianBlue' }}/>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>蛋白質</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: this.props.porteinLevel >= v ? colors.pink : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.props.portein)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>脂肪</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: this.props.fatLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.props.fat)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>脂肪酸</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: this.props.omegaLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.props.omega)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>纖維素</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: this.props.celluloseLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.props.cellulose)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>鈣</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: this.props.calciumLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.props.calcium)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>磷</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: this.props.phosphorusLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.props.phosphorus)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>牛磺酸</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: this.props.taurineLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.props.taurine)/100 }%</NutrientText>
                    </NutrientContainer>

                </ContentContainer>
            </Container>
        )
    }
}