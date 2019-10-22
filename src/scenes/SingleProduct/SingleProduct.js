import React, { Component } from 'react'
import styled from 'styled-components'
import Main from '@poke/layouts/Main'
import { buildApiUrl } from '@poke/services/apis/util'
import $ from 'jquery'
import colors from '@poke/styles/colors'
import StarGray from './images/01.star_gray.png'
import StarYellow from './images/01.star_yellow.png'
import StarGraySmall from './images/12.sstar_gray.png'
import StarYellowSmall from './images/12.sstar_yellow.png'
import bgImg from './images/13.graybg.png'
import FunctionBtn from './components/FunctionBtn'
import {flash_message} from '@poke/components/Message'

const Container = styled.div`
  width: 70vw;
  margin: 5rem auto 3rem;
`

const MainTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  color: ${colors.prussianBlue};
`

const ProductImg = styled.div`
  width: 640px;
  height: 480px;
  background-color: ${colors.silver};
`
const ProductImgChooseBtn = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  margin: auto;
  background-color: ${colors.pink};
`

const ProductTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: ${colors.prussianBlue};
`

const Star = styled.img`
  margin-right: 10px;
`

const Content = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  color: ${colors.prussianBlue};
`


const NutrientContainer = styled.div`
  display: flex;
  margin: 10px 10vw;
`

const NutrientBox = styled.div`
  align-self: center;
  width: 121px;
  height: 31px;
  border-radius: 15.3px;
  margin-left: 3px;
  margin-right: 3px;
`

const NutrientText = styled.div`
  width: 20%;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 1.15px;
  color: ${colors.prussianBlue};
`

const Circle = styled.div`
  background-color: ${props => props.verified ? colors.orange : colors.revell};
  width: 150px;
  height: 150px;
  border-radius: 999999px;
`

const DownContainer = styled.div`
  background: url(${bgImg}) repeat center;
  padding: 3rem 15vw;
`

const H1Title = styled.div`
  font-size: 90px;
  font-weight: 900;
  letter-spacing: 4.9px;
  color: ${colors.prussianBlue};
  line-height: 90px;
`

const LevelChoose = styled.div`
  float: right;
  width: 130px;
  height: 70px;
  border-radius: 20px;
  background-color: ${props => props.choose ? colors.gray : colors.grey};
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 70px;
  color: ${props => props.choose ? colors.white : colors.prussianBlue};
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
`

const Replies = styled.div`
  margin-top: 50px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${colors.white};
  position: relative;
`
const TextArea = styled.textarea`
  border: none;
  width: calc(100% - 20px);
  border-bottom: 1px solid;
  padding: 10px;
  margin: 10px 0px;
  &:disabled {
    background-color: ${colors.white};
  }
`

const BtnCancel = styled.div`
  display: ${props => props.disabled ? 'none' : 'unset' };  
  width: 57px;
  height: 22px;
  border-radius: 10px;
  background-color: ${colors.silver};
  float: right;
  text-align: center;
  margin-left: 5px;
  padding: 3px;
  line-height: 1.29;
  letter-spacing: 2.8px;
  font-family: MicrosoftJhengHei;
  font-size: 14px;
  cursor: pointer;
`

const BtnReply = styled.div`
  display: ${props => props.disabled ? 'none' : 'unset' };
  width: 57px;
  height: 22px;
  border-radius: 10px;
  background-color: ${colors.silver};
  float: right;
  text-align: center;
  margin-left: 5px;
  padding: 3px;
  line-height: 1.29;
  letter-spacing: 2.8px;
  font-family: MicrosoftJhengHei;
  font-size: 14px;
  cursor: pointer;
`

export default class SingleProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            scrollTimeOut: 0,
            isLogIn: typeof window !== 'undefined' && localStorage.getItem('access_token'),
            product_id: parseInt(this.props.match.params.productID),
            product: {},
            imgs: [],
            offset: 0,
            limit: 5,
            rank: null,
            total_counts: [],
            replies: []
        }
        this.scroll = this.scroll.bind(this)
        this.logState = this.logState.bind(this)
        this.getProduct = this.getProduct.bind(this)
        this.getReplies = this.getReplies.bind(this)
        this.convertDic = this.convertDic.bind(this)
        this.starMouseIn = this.starMouseIn.bind(this)
        this.starMouseOut = this.starMouseOut.bind(this)
    }

    componentDidMount(){
        this.getProduct(this.state.product_id)
        this.getReplies(this.state.product_id, {offset:this.state.offset, rank:this.state.rank})
        if (typeof window !== 'undefined') {
            document.addEventListener('logState', this.logState)
            document.addEventListener('scroll', this.scroll)
        }
    }
    scroll() {
        let DownContent = document.getElementById('DownContent')
        if (this.state.scrollTimeOut != 0) return false
        if (window.scrollY < DownContent.offsetTop) return false
        if (this.state.replies.filter(n => {return (this.state.rank == null) || (n.rank == this.state.rank)}).length > this.state.total_counts[this.state.rank]) return false
        
        this.setState({scrollTimeOut: 1000}, function(){
            setTimeout(function(){
                this.setState({scrollTimeOut: 0})
            }.bind(this), this.state.scrollTimeOut)
        }.bind(this))
        this.getReplies(this.state.product_id, {rank: this.state.rank, offset: this.state.offset})
    }
    logState() {
        this.setState({
            isLogIn: typeof window !== 'undefined' && localStorage.getItem('access_token')
        })
    }
    getProduct(product_id) {
        let apiUrl = buildApiUrl(`products/${product_id}`, {})
        $.ajax({
            url: apiUrl,
            method: 'get',
            success: function(data) {
                let param = {
                    product: data.product,
                    nutrients: data.nutrients
                }

                data.nutrients.map(n => {
                    let d = (n.maximum - n.minimum)/5
                    param[`nutrient_${n.nutrient}`] = [1,2,3,4,5].map(i => { return n.minimum + i*d })
                })

                this.setState(param)
            }.bind(this),
            error: function(err) {
                throw err
            }.bind(this)
        })
    }
    getReplies(product_id, { offset, rank }) {
        this.setState({
            offset,
            rank
        })
        let apiUrl = buildApiUrl(`products/${product_id}/replies`, {offset, rank})
        $.ajax({
            url: apiUrl,
            method: 'get',
            success: function(data){
                let replies = this.state.replies
                data.replies.map((v,i) => { 
                    if ( replies.map(v=> {return v.reply_id}).indexOf(v.reply_id) == -1 ) replies.push(v) 
                })

                this.setState({
                    total_counts: data.total_counts,
                    replies,
                    offset: replies.filter(n => {return (this.state.rank==null) || (n.rank==rank)}).length
                }, function() {
                    console.log('data:', data.replies)
                    console.log('state:', this.state.replies)
                }.bind(this))
            }.bind(this),
            error: function(err) {
                throw err
            }.bind(this)
        })
    }
    convertDic() {
        return {
            branch:'品牌',
            product:'產品',
            taste_fish:'魚肉',
            taste_chicken:'雞肉',
            taste_duck:'鴨肉',
            taste_turkey:'火雞肉',
            taste_sheet:'羊肉',
            taste_beef:'牛肉',
            taste_pig:'豬肉',
            taste_deer:'鹿肉',
            origin:'產地',
            price:'價格',
            size:'包裝大小',
            nutrition_calories:'熱量',
            nutrition_portein:'蛋白質',
            nutrition_fat:'脂肪',
            nutrition_omega3:'Omega 3脂肪酸',
            nutrition_omega6:'Omega 6脂肪酸',
            nutrition_cellulose:'纖維素',
            nutrition_ash:'粗灰份',
            nutrition_water:'水份',
            nutrition_calcium:'鈣',
            nutrition_phosphorus:'磷',
            nutrition_taurine:'牛磺酸',
            verify_wdj:'WDJ',
            verify_aafco:'AAFCO',
            verify_nrc:'NRC',
            verify_msc:'MSC',
            verify_gap:'GAP',
            special_demand_weight_control:'體重控制',
            special_demand_stomach_protect:'腸胃保健',
            special_demand_no_grain:'無穀',
            special_demand_not_genetic_modification:'非基因改造',
            special_demand_joint_protect:'關節保健',
            special_demand_immunity_increase:'增強免疫力',
            special_demand_pelt_protect:'皮毛保健',
            special_demand_anti_oxidation:'抗氧化',
            special_demand_no_antibiotic:'不含抗生素',
            special_demand_cardiovascular_protect:'心血管',
            special_demand_no_meet_by_product:'不含肉類副產物',
            special_demand_other:'其他',
            status_young_cat:'幼貓',
            status_adult_cat:'成貓',
            status_pregnancy_cat:'懷孕母貓',
            status_mature_age_cat:'熟齡貓',
            status_young_dog:'幼犬',
            status_small_dog:'小型犬',
            status_adult_dog:'成犬',
            status_pregnancy_dog:'懷孕母犬',
            status_old_dog:'老齡犬',
            demand_urinary:'特殊狀態(疾病)_泌尿道處方',
            demand_stomach:'特殊狀態(疾病)_腸胃道處方',
            demand_kidney:'特殊狀態(疾病)_腎臟處方',
            demand_skin:'特殊狀態(疾病)_皮膚處方',
            content:'內容物',
            remark:'備註',
        }
    }
    starMouseIn(i) {
        let access_token = localStorage.getItem('access_token')
        if (!!access_token) {
            let product = this.state.product
            let product_rank = this.state.product.rank
            product.rank = i
            
            this.setState({
                product,
                product_rank
            })
        }
    }
    starMouseOut() {
        let access_token = localStorage.getItem('access_token')
        if (!!access_token) {
            let product = this.state.product
            product.rank = this.state.product_rank
    
            this.setState({
                product
            })
        }
    }
    starClick(rank) {
        let access_token = localStorage.getItem('access_token')
        if (!!access_token) {
            let product_id = this.state.product_id
            let apiUrl = buildApiUrl(`products/${product_id}/ranks`)
            
            $.ajax({
                url: apiUrl,
                method: 'post',
                headers: {
                    Authorization: access_token,
                },
                data: {
                    rank
                },
                success: function(data){
                    flash_message('評價成功', false)
                    let product = this.state.product
                    product.rank = data.rank
                    this.setState({
                        product,
                        product_rank: data.rank
                    })
                }.bind(this),
                error: function(err){
                    throw err
                }.bind(this)
            })
        }
    }

    render() {
        let imgs = !this.state.imgs ? this.state.imgs.map( (v, i) => { return <ProductImg id={`img${i}`}><img src={v}/></ProductImg> }) : <ProductImg ><img></img></ProductImg>
        let imgsBtn = !this.state.imgs ? this.state.imgs.map( (v,i) => { return <ProductImgChooseBtn><a href={`#img${i}`}></a></ProductImgChooseBtn> }) : <ProductImgChooseBtn><a></a></ProductImgChooseBtn>
        let stars = [1,2,3,4,5].map( v => { return <Star src={this.state.product.rank >= v ? StarYellow : StarGray} 
                                                         onMouseEnter={evt => this.starMouseIn(v)} 
                                                         onMouseLeave={this.starMouseOut} 
                                                         onClick={evt => this.starClick(v)}/> })
        let status = Object.entries(this.state.product)
                     .filter(n => {return n[0].startsWith('status') && n[1]=='Y'})
                     .map( v => { return this.convertDic()[v[0]] })
                     .join('、')
        let taste = Object.entries(this.state.product)
                    .filter(n => {return (n[0].startsWith('taste') && n[1]=='Y' )})
                    .map( v => { return this.convertDic()[v[0]] } )
                    .join('、')
        let verify = Object.entries(this.state.product)
                     .filter(n => {return n[0].startsWith('verify')})
                     .map( v => { return (
                            <div style={{ margin: 'auto'}}>
                                <Circle verified={v[1]=='Y'}></Circle>
                                <MainTitle style={{ textAlign: 'center' }}>{this.convertDic()[v[0]]}</MainTitle>
                            </div>
                     )})
        let chooseBtns = ['一星','二星','三星','四星','五星','全部'].map((v,i) => {
            let rank = v=='全部' ? null : i+1
            return (
                <LevelChoose 
                    choose={this.state.rank==rank}
                    onClick={evt => this.getReplies(this.state.product_id, { rank, offset: 0 })}>
                    {`${v}(${this.state.total_counts[i+1] || 0})`} 
                </LevelChoose>
            )
        })
        let replies = this.state.replies
            .filter(n => {return (this.state.rank == null) || (n.rank == this.state.rank)})
            .map((reply,i) => {
                let small_stars = [1,2,3,4,5].map(v => {return <Star src={reply.rank >= v ? StarYellowSmall : StarGraySmall} />})
                return (
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <img src={reply.user_img || `https://via.placeholder.com/${60}x${60}`} style={{ backgroundColor: '#eeee', width: 60, height: 60, borderRadius: 9999, margin: 10 }}/>
                        <div style={{ width: '100%' }}>
                            <div>
                                <span style={{fontSize: 14, lineHeight: 1.29, letterSpacing: 2.8, marginRight: 10}}>{reply.user_name}</span>
                                <span style={{fontSize: 8}}>{reply.created_at}</span>
                                <span style={{ float: 'right' }}>{small_stars}</span>
                            </div>
                            <div style={{ fontSize: 14, lineHeight: 1.29, letterSpacing: 2.8, marginTop: 10 }} dangerouslySetInnerHTML={{ __html: reply.content.replace('\n', '<br/>') }}></div>
                        </div>
                    </div>
                )
            })

        let ori_special = Object.entries(this.state.product).filter(n => { return n[0].startsWith('special_demand') })
        let special = []
        while (ori_special.length) {
            special.push((
                <div style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
                    {
                        ori_special.splice(0,5).map(v => {
                            return (
                                <div style={{ margin: 'auto'}}>
                                    <Circle verified={v[1]=='Y'}></Circle>
                                    <MainTitle style={{ textAlign: 'center' }}>{this.convertDic()[v[0]]}</MainTitle>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
        
        let porteinLevel = !!this.state.nutrient_portein && this.state.nutrient_portein.map( v => this.state.product.nutrition_portein > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
        let fatLevel = !!this.state.nutrient_fat && this.state.nutrient_fat.map( v => this.state.product.nutrition_fat > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
        let omegaLevel = !!this.state.nutrient_omega3 && this.state.nutrient_omega3.map( v => this.state.product.nutrition_omega3 > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
        let celluloseLevel = !!this.state.nutrient_cellulose && this.state.nutrient_cellulose.map( v => this.state.product.nutrition_cellulose > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
        let calciumLevel = !!this.state.nutrient_calcium && this.state.nutrient_calcium.map( v => this.state.product.nutrition_calcium > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
        let phosphorusLevel = !!this.state.nutrient_phosphorus && this.state.nutrient_phosphorus.map( v => this.state.product.nutrition_phosphorus > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
        let taurineLevel = !!this.state.nutrient_taurine && this.state.nutrient_taurine.map( v => this.state.product.nutrition_taurine > v ? 1: 0 ).reduce((a,b) => a+b ) + 1

        let user_img = (typeof window !== 'undefined') ? localStorage.getItem('user_img') : ''

        return (
            <Main>
                <Container>
                    <MainTitle>篩選結果</MainTitle>
                    <hr style={{ border: `1px solid ${colors.prussianBlue}` }} />
                    <div style={{ display: 'flex', marginTop: 30, marginBottom: 50 }}>
                        <div>
                            <div style={{ display: 'flex', overflow: 'hidden', flexDirection: 'row', width: 640 }}>
                                { imgs }
                            </div>
                            <div style={{ display: 'flex', width: 3*imgsBtn.length, margin: '10px auto' }}>
                                { imgsBtn }
                            </div>
                        </div>
                        <div style={{ marginLeft: 100, marginTop: 10, position: 'relative', width: '-webkit-fill-available' }}>
                            <ProductTitle>{this.state.product.branch}</ProductTitle>
                            <ProductTitle>{this.state.product.product}</ProductTitle>
                            <div>
                                {stars}
                            </div>
                            <hr style={{ border: `1px solid ${colors.prussianBlue}` }} />
                            <Content>適合對象：{status}</Content>
                            <Content>產地：{this.state.product.origin}</Content>
                            <Content>口味：{taste}</Content>
                            <Content>包裝：{Math.round(10000*this.state.product.size)/100}磅</Content>
                            <div style={{ position: 'absolute', bottom: 20, right: 0}}>
                                <FunctionBtn fa="note" word="加入篩選紀錄" />
                                <FunctionBtn fa="heart" word="加入商品蒐藏" />
                            </div>
                        </div>
                    </div>
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>蛋白質</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: porteinLevel >= v ? colors.pink : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.state.product.nutrition_portein)/100 }%</NutrientText>
                    </NutrientContainer>

                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>脂肪</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: fatLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.state.product.nutrition_fat)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>脂肪酸</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: omegaLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.state.product.nutrition_omega3)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>纖維素</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: celluloseLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.state.product.nutrition_cellulose)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>鈣</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: calciumLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.state.product.nutrition_calcium)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>磷</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: phosphorusLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.state.product.nutrition_phosphorus)/100 }%</NutrientText>
                    </NutrientContainer>
                    
                    <NutrientContainer>
                        <NutrientText style={{ width: '20%' }}>牛磺酸</NutrientText>
                        { [1,2,3,4,5].map( v => { return <NutrientBox style={{ backgroundColor: taurineLevel >= v ? colors.orange : colors.grey }} /> }) }
                        <NutrientText style={{ width: '15%', textAlign: 'right' }}>{ Math.round(10000*this.state.product.nutrition_taurine)/100 }%</NutrientText>
                    </NutrientContainer>

                    <MainTitle>認證</MainTitle>
                    <hr style={{ border: `1px solid ${colors.prussianBlue}` }} />
                    <div style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
                        {verify}
                    </div>

                    <MainTitle>特殊訴求</MainTitle>
                    <hr style={{ border: `1px solid ${colors.prussianBlue}` }} />
                    {special}

                </Container>
                <DownContainer id="DownContent">
                    <MainTitle>商品評價</MainTitle>
                    <hr style={{ border: `1px solid ${colors.prussianBlue}` }} />
                    
                    <H1Title>
                        { (Math.round(10*this.state.product.rank)/10).toFixed(1) }
                        {chooseBtns}
                    </H1Title>
                    {stars}

                    <Replies>
                      {/* <div style={{position: 'absolute', margin: '3px 20px 0px 0px', top: 0, right: 0}}>{this.state.replies_total_count}則留言</div> */}
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <img src={user_img || `https://via.placeholder.com/${60}x${60}`} style={{ backgroundColor: '#eeee', width: 60, height: 60, borderRadius: 9999, margin: 10 }}/>
                          <div style={{ width: 'calc(100% - 80px)' }}>
                              <TextArea id="replyText" type="text" 
                                     placeholder={ !!this.state.isLogIn ? '新增公開留言...' : '請登入後回復' }
                                     value={ !!this.state.isLogIn ? this.state.replyText : ''} 
                                     onChange={evt => this.changeReplyText(evt)} disabled={ !this.state.isLogIn }
                              />
                              <BtnReply disabled={ !this.state.isLogIn } onClick={this.postReply}>留言</BtnReply>
                              <BtnCancel disabled={ !this.state.isLogIn } onClick={evt => {this.setState({replyText:''})}}>取消</BtnCancel>
                          </div>
                      </div>
                      {replies}
                    </Replies>

                </DownContainer>
            </Main>
        )
    }
}

