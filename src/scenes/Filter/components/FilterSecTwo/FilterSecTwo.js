import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '@poke/styles/colors'
import { FaPlus } from 'react-icons/fa';
import bgImg from './images/05.bg.png'
import arrowImg from './images/arrow.png'
import $ from 'jquery'

const Container = styled.div``

const TopContainer = styled.div`
  width: 80vw;
  margin: 0px auto 1.5rem auto;
`

const DownContainer = styled.div`
  background: url(${bgImg}) repeat;
  padding: 1rem 10vw;
`

const MainTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  color: ${colors.prussianBlue};
`
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 1.4px;
  color: ${colors.prussianBlue};
  position: relative;
  & > div {
      position: absolute;
      bottom: 0px;
      width: max-content;
  }
`

const CustomerFieldSelect = styled.select`
  background: ${colors.grey} url(${arrowImg}) no-repeat right top;
  background-size: 80px 40px;
  border: none;
  width: 320px;
  height: 40px;
  border-radius: 20px;
  color: ${colors.prussianBlue};
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  padding: 3px 20px;
  appearance:none;
`

const Line = styled.div`
  display: flex;
  margin-top: 1.5rem;
  position: relative;
  transition: height 1s;
`

const Clicker = styled.div`
  width: 210px;
  height: 60px;
  border-radius: 20px;
  background-color: ${props => props.choosen ? colors.pink : colors.grey};
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 60px;
  color: ${colors.prussianBlue};
  margin-right: 40px;
`

const NutritionTitle = styled.div`
  width: 210px;
  height: 60px;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 60px;
  color: ${colors.prussianBlue};
  margin-right: 40px;
`

const GoBtn = styled.div`
  width: 450px;
  height: 70px;
  border-radius: 35px;
  background-color: ${colors.pink};
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1.8px;
  color: ${colors.white};
  text-align: center;
  line-height: 70px;
  cursor: pointer;
  margin: 20px auto;
`

export default class FilterSecTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notLogIn: typeof window != 'undefined' && !localStorage.getItem('access_token'),
            field1: '請選擇...',
            field2: '請選擇...',
            field3: '請選擇...',
            field4: '請選擇...',
        }
        this.logStateHandler = this.logStateHandler.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.clickerChange = this.clickerChange.bind(this)
        this.createField = this.createField.bind(this)
        this.filterProducts = this.filterProducts.bind(this)
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.addEventListener('logState', this.logStateHandler)
        }
    }

    logStateHandler() {
        this.setState({
            notLogIn: typeof window != 'undefined' && !localStorage.getItem('access_token')
        })
    }

    changeInput(event, { key }) {
        let dic = {}
        let input = event.target

        if ( !!key ) {
            dic[key] = input.value
            this.setState(dic, function(){
                console.log(this.state)
            }.bind(this))
        }
        else {
            dic[input.name] = input.value
            this.setState(dic, function(){
                console.log(this.state)
            }.bind(this))
        }
    }

    clickerChange(event, key) {
        let value = event.target.innerText
        let dic = {}
        
        if (typeof this.state[key] !== 'undefined') {
            dic[key] = this.state[key]

            if (dic[key].indexOf(value) == -1) {
                dic[key].push(value)
                this.setState(dic)
            }
            else {
                dic[key].splice( dic[key].indexOf(value), 1 )
                this.setState(dic)
            }
        }
        else {
            dic[key] = [value]

            this.setState(dic)
        }
    }

    createField(v,i) {
        let options = [
            <option>請選擇...</option>,
            <option>口味</option>,
            <option>產地</option>,
            <option>認證</option>,
            <option>營養素</option>,
            <option>包裝大小</option>,
            // <option>特殊需求</option>,
            <option>特殊疾病</option>
        ]

        let choosen = {
            口味: [
                <Line>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('魚肉') != -1 }>魚肉</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('雞肉') != -1 }>雞肉</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('鴨肉') != -1 }>鴨肉</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('羊肉') != -1 }>羊肉</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('火雞肉') != -1 }>火雞肉</Clicker>
                </Line>,
                <Line>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('牛肉') != -1 }>牛肉</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('豬肉') != -1 }>豬肉</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '口味')} choosen={this.state.口味 && this.state.口味.indexOf('鹿肉') != -1 }>鹿肉</Clicker>
                </Line>
            ],
            產地: [
                <Line>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('美國') != -1 }>美國</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('泰國') != -1 }>泰國</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('法國') != -1 }>法國</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('台灣') != -1 }>台灣</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('加拿大') != -1 }>加拿大</Clicker>
                </Line>,
                <Line>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('義大利') != -1 }>義大利</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('紐西蘭') != -1 }>紐西蘭</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '產地')} choosen={this.state.產地 && this.state.產地.indexOf('澳大利亞') != -1 }>澳大利亞</Clicker>
                </Line>
            ],
            包裝大小: [
                <Line>
                    <Clicker onClick={evt => this.clickerChange(evt, '包裝大小')} choosen={this.state.包裝大小 && this.state.包裝大小.indexOf('3磅以下') != -1 }>3磅以下</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '包裝大小')} choosen={this.state.包裝大小 && this.state.包裝大小.indexOf('3-8磅') != -1 }>3-8磅</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '包裝大小')} choosen={this.state.包裝大小 && this.state.包裝大小.indexOf('8-16磅') != -1 }>8-16磅</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '包裝大小')} choosen={this.state.包裝大小 && this.state.包裝大小.indexOf('16磅以上') != -1 }>16磅以上</Clicker>
                </Line>
            ],
            認證: [
                <Line>
                    <Clicker onClick={evt => this.clickerChange(evt, '認證')} choosen={this.state.認證 && this.state.認證.indexOf('WDJ') != -1 }>WDJ</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '認證')} choosen={this.state.認證 && this.state.認證.indexOf('AAFCO') != -1 }>AAFCO</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '認證')} choosen={this.state.認證 && this.state.認證.indexOf('NRC') != -1 }>NRC</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '認證')} choosen={this.state.認證 && this.state.認證.indexOf('MSC') != -1 }>MSC</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '認證')} choosen={this.state.認證 && this.state.認證.indexOf('GAP') != -1 }>GAP</Clicker>
                </Line>
            ],
            // 特殊需求: [
            //     <Line>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('無穀') != -1 }>無穀</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('體重控制') != -1 }>體重控制</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('腸胃保健') != -1 }>腸胃保健</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('關節保健') != -1 }>關節保健</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('非基因改造') != -1 }>非基因改造</Clicker>
            //     </Line>,
            //     <Line>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('抗氧化') != -1 }>抗氧化</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('皮毛保健') != -1 }>皮毛保健</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('增強免疫力') != -1 }>增強免疫力</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('不含抗生素') != -1 }>不含抗生素</Clicker>
            //         <Clicker onClick={evt => this.clickerChange(evt, '特殊需求')} choosen={this.state.特殊需求 && this.state.特殊需求.indexOf('不含肉類副產品') != -1 }>不含肉類副產品</Clicker>
            //     </Line>
            // ],
            特殊疾病: [
                <Line>
                    <Clicker onClick={evt => this.clickerChange(evt, '特殊疾病')} choosen={this.state.特殊疾病 && this.state.特殊疾病.indexOf('泌尿處方') != -1 }>泌尿處方</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '特殊疾病')} choosen={this.state.特殊疾病 && this.state.特殊疾病.indexOf('腎臟處方') != -1 }>腎臟處方</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '特殊疾病')} choosen={this.state.特殊疾病 && this.state.特殊疾病.indexOf('皮膚處方') != -1 }>皮膚處方</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '特殊疾病')} choosen={this.state.特殊疾病 && this.state.特殊疾病.indexOf('腸胃道處方') != -1 }>腸胃道處方</Clicker>
                </Line>
            ],
            營養素: [
                <Line>
                    <NutritionTitle>熱量</NutritionTitle>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_熱量')} choosen={this.state.營養素_熱量 && this.state.營養素_熱量.indexOf('低') != -1 }>低</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_熱量')} choosen={this.state.營養素_熱量 && this.state.營養素_熱量.indexOf('中') != -1 }>中</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_熱量')} choosen={this.state.營養素_熱量 && this.state.營養素_熱量.indexOf('高') != -1 }>高</Clicker>
                </Line>,
                <Line>
                    <NutritionTitle>蛋白質</NutritionTitle>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_蛋白質')} choosen={this.state.營養素_蛋白質 && this.state.營養素_蛋白質.indexOf('低') != -1 }>低</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_蛋白質')} choosen={this.state.營養素_蛋白質 && this.state.營養素_蛋白質.indexOf('中') != -1 }>中</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_蛋白質')} choosen={this.state.營養素_蛋白質 && this.state.營養素_蛋白質.indexOf('高') != -1 }>高</Clicker>
                </Line>,
                <Line>
                    <NutritionTitle>脂肪</NutritionTitle>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_脂肪')} choosen={this.state.營養素_脂肪 && this.state.營養素_脂肪.indexOf('低') != -1 }>低</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_脂肪')} choosen={this.state.營養素_脂肪 && this.state.營養素_脂肪.indexOf('中') != -1 }>中</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_脂肪')} choosen={this.state.營養素_脂肪 && this.state.營養素_脂肪.indexOf('高') != -1 }>高</Clicker>
                </Line>,
                <Line>
                    <NutritionTitle>纖維素</NutritionTitle>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_纖維素')} choosen={this.state.營養素_纖維素 && this.state.營養素_纖維素.indexOf('低') != -1 }>低</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_纖維素')} choosen={this.state.營養素_纖維素 && this.state.營養素_纖維素.indexOf('中') != -1 }>中</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_纖維素')} choosen={this.state.營養素_纖維素 && this.state.營養素_纖維素.indexOf('高') != -1 }>高</Clicker>
                </Line>,
                <Line>
                    <NutritionTitle>鈣</NutritionTitle>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_鈣')} choosen={this.state.營養素_鈣 && this.state.營養素_鈣.indexOf('低') != -1 }>低</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_鈣')} choosen={this.state.營養素_鈣 && this.state.營養素_鈣.indexOf('中') != -1 }>中</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_鈣')} choosen={this.state.營養素_鈣 && this.state.營養素_鈣.indexOf('高') != -1 }>高</Clicker>
                </Line>,
                <Line>
                    <NutritionTitle>磷</NutritionTitle>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_磷')} choosen={this.state.營養素_磷 && this.state.營養素_磷.indexOf('低') != -1 }>低</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_磷')} choosen={this.state.營養素_磷 && this.state.營養素_磷.indexOf('中') != -1 }>中</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_磷')} choosen={this.state.營養素_磷 && this.state.營養素_磷.indexOf('高') != -1 }>高</Clicker>
                </Line>,
                <Line>
                    <NutritionTitle>牛磺酸</NutritionTitle>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_牛磺酸')} choosen={this.state.營養素_牛磺酸 && this.state.營養素_牛磺酸.indexOf('低') != -1 }>低</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_牛磺酸')} choosen={this.state.營養素_牛磺酸 && this.state.營養素_牛磺酸.indexOf('中') != -1 }>中</Clicker>
                    <Clicker onClick={evt => this.clickerChange(evt, '營養素_牛磺酸')} choosen={this.state.營養素_牛磺酸 && this.state.營養素_牛磺酸.indexOf('高') != -1 }>高</Clicker>
                </Line>,
            ]
        }

        return (
            <div>
                <div style={{ marginTop: 20 }}>
                    <CustomerFieldSelect value={v} onChange={evt => this.changeInput(evt, {key:`field${i+1}`})}>
                        { options }
                    </CustomerFieldSelect>
                </div>
                <div style={{ marginTop: 20 }}>
                    { choosen[v] }
                </div>
            </div>
        )
    }

    filterProducts(){
        let convertDic = {
            寵物: 'pet',
            寵物狀態: 'status',
            商品需求: 'special_demand',
            口味: 'taste',
            產地: 'origin',
            認證: 'verify',
            營養素_熱量: 'nutrition_calories',
            營養素_蛋白質: 'nutrition_portein',
            營養素_脂肪: 'nutrition_fat',
            營養素_纖維素: 'nutrition_cellulose',
            營養素_鈣: 'nutrition_calcium',
            營養素_磷: 'nutrition_phosphorus',
            營養素_牛磺酸: 'nutrition_taurine',
            包裝大小: 'size',
            特殊疾病: 'demand',
        }
        let data = {}
        Object.entries(this.state)
        // 初始參數不傳遞, return undefined
        .map((v,i) => { 
            if ( ['notLogIn', 'field1', 'field2', 'field3', 'field4'].indexOf(v[0]) == -1 ) {
                return v
            }
        })
        // 移除undefined空白元素
        .filter((n)=>{return n})
        // 塞進data
        .map(v => { data[convertDic[v[0]]] = v[1].join(',') })

        location.href = `/products?${$.param(data)}`
    }

    render() {
        let fields = this.state.notLogIn
        ? [this.state.field1, this.state.field2].map(this.createField)
        : [this.state.field1, this.state.field2, this.state.field3, this.state.field4].map(this.createField)

        return (
            <Container>
                <TopContainer>
                    <div style={{ display: 'flex', marginTop: 80 }}>
                        <MainTitle>寵物</MainTitle>
                        <SubTitle><div>(必填)</div></SubTitle>
                    </div>
                    <hr style={{ border: 'solid 1px' }} />
                    <Line>
                        <Clicker onClick={evt => this.clickerChange(evt, '寵物')} choosen={this.state.寵物 && this.state.寵物.indexOf('貓') != -1 }>貓</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '寵物')} choosen={this.state.寵物 && this.state.寵物.indexOf('狗') != -1 }>狗</Clicker>
                    </Line>
                    {
                        this.state.寵物 && this.state.寵物.indexOf('狗') != -1 &&
                        <Line>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('幼犬') != -1 }>幼犬</Clicker>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('成犬') != -1 }>成犬</Clicker>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('熟齡犬') != -1 }>熟齡犬</Clicker>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('小型犬') != -1 }>小型犬</Clicker>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('懷孕母犬') != -1 }>懷孕母犬</Clicker>
                        </Line>
                    }
                    {
                        this.state.寵物 && this.state.寵物.indexOf('貓') != -1 &&
                        <Line>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('幼貓') != -1 }>幼貓</Clicker>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('成貓') != -1 }>成貓</Clicker>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('熟齡貓') != -1 }>熟齡貓</Clicker>
                            <Clicker onClick={evt => this.clickerChange(evt, '寵物狀態')} choosen={this.state.寵物狀態 && this.state.寵物狀態.indexOf('懷孕母貓') != -1 }>懷孕母貓</Clicker>
                        </Line>
                    }
                    <div style={{ display: 'flex', marginTop: 80 }}>
                        <MainTitle>商品需求</MainTitle>
                        <SubTitle><div>(選填)</div></SubTitle>
                    </div>
                    <hr style={{ border: 'solid 1px' }} />
                    <Line>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('無穀') != -1 }>無穀</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('非基改') != -1 }>非基改</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('抗氧化') != -1 }>抗氧化</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('不含抗生素') != -1 }>不含抗生素</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('不含副產品') != -1 }>不含副產品</Clicker>
                        <FaPlus 
                        style={{ fontSize: '3rem', padding: 5, backgroundColor: colors.iron, color: colors.prussianBlue, borderRadius: 99999, position: 'absolute', right: 0 }}
                        onClick={evt => {
                            if (document.getElementById('sec').style.height == '0px') document.getElementById('sec').style.height = '60px'
                            else document.getElementById('sec').style.height = '0px'
                        }}
                        />
                    </Line>
                    <Line id="sec" style={{height: 0, overflow: 'hidden'}}>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('體重控制') != -1 }>體重控制</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('腸胃保健') != -1 }>腸胃保健</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('皮毛保健') != -1 }>皮毛保健</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('關節保健') != -1 }>關節保健</Clicker>
                        <Clicker onClick={evt => this.clickerChange(evt, '商品需求')} choosen={this.state.商品需求 && this.state.商品需求.indexOf('增加免疫力') != -1 }>增加免疫力</Clicker>
                    </Line>
                </TopContainer>
                <DownContainer>
                    <div style={{ display: 'flex', marginTop: 80 }}>
                        <MainTitle>寵物食品細項類別</MainTitle>
                        <SubTitle><div>(可複選)</div></SubTitle>
                    </div>
                    <hr style={{ border: 'solid 1px' }} />
                    
                    { fields }

                    <GoBtn onClick={this.filterProducts}>立即篩選去</GoBtn>
                </DownContainer>
            </Container>
        )
    }
}