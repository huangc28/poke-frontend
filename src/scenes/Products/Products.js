import React, { Component } from 'react'
import Main from '@poke/layouts/Main'
import styled from 'styled-components'
import { buildApiUrl } from '@poke/services/apis/util'
import ProductCard from './components/ProductCard'
import RecordBtn from './components/RecordBtn'
import DoubleInput from './components/DoubleInput'
import Paginator from '@poke/components/Paginator'
import colors from '@poke/styles/colors'
import $ from 'jquery'

const Container = styled.div`
  width: 60vw;
  margin: 5rem auto;
`

const MainTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
  color: ${colors.prussianBlue};
`

const SubTitle = styled.div`
  align-self: center;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.7px;
  color: ${colors.prussianBlue};
  margin-left: 5px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CardLine = styled.div`
  display: flex;
  margin: 0px auto 3rem;
`

const PaginatorContainer = styled.div`
  padding-bottom: 3.125rem;
  display: flex;
  text-align: center;
  justify-content: center;
`

export default class Products extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            offset: 0,
            limit: 9,
            sort: 'price',
            desc: false,
            total_count: 0,
            nutrients: [],
            products: []
        }
        this.getProducts = this.getProducts.bind(this)
        this.createProductCard = this.createProductCard.bind(this)
        this.countTotalPages = this.countTotalPages.bind(this)
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.title = 'POKE | 篩選器'
        }
    }

    getProducts(param) {
        let apiUrl = buildApiUrl(`products`, param)
            
        $.ajax({
            url: apiUrl,
            method: 'get',
            success: function(data){
                param['total_count'] = data.total_count
                param['nutrients'] = data.nutrients
                param['products'] = data.products
                param['total_page'] = this.countTotalPages(this.state.limit, data.total_count)

                data.nutrients.map(n => {
                    let d = (n.maximum - n.minimum)/5
                    param[`nutrient_${n.nutrient}`] = [1,2,3,4,5].map(i => { return n.minimum + i*d })
                })
                
                this.setState(param, () => { console.log(this.state) })
            }.bind(this),
            error: function(err) {
                throw err
            }.bind(this)
        })
    }

    countTotalPages (perPage, totalCount) {
        const residual = totalCount % perPage
        let pages = Math.floor(totalCount / perPage)
      
        if (residual > 0) {
          pages++
        }
      
        return pages
    }

    createProductCard(i) {
        if ( !!this.state.products[i] ) {
            let product = this.state.products[i]
            
            // 計算各營養素佔總營養素排行
            let porteinLevel = this.state.nutrient_portein.map( v => product.nutrition_portein > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
            let fatLevel = this.state.nutrient_fat.map( v => product.nutrition_fat > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
            let omegaLevel = this.state.nutrient_omega3.map( v => product.nutrition_omega3 > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
            let celluloseLevel = this.state.nutrient_cellulose.map( v => product.nutrition_cellulose > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
            let calciumLevel = this.state.nutrient_calcium.map( v => product.nutrition_calcium > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
            let phosphorusLevel = this.state.nutrient_phosphorus.map( v => product.nutrition_phosphorus > v ? 1: 0 ).reduce((a,b) => a+b ) + 1
            let taurineLevel = this.state.nutrient_taurine.map( v => product.nutrition_taurine > v ? 1: 0 ).reduce((a,b) => a+b ) + 1

            return (
                <ProductCard
                    href={`/products/${product.product_id}`}

                    branch={product.branch}
                    product={product.product}
                    stars={product.rank}
                    
                    portein={product.nutrition_portein}
                    porteinLevel={porteinLevel}
                    
                    fat={product.nutrition_fat}
                    fatLevel={fatLevel}
            
                    omega={product.nutrition_omega3}
                    omegaLevel={omegaLevel}
            
                    cellulose={product.nutrition_cellulose}
                    celluloseLevel={celluloseLevel}
            
                    calcium={product.nutrition_calcium}
                    calciumLevel={calciumLevel}
            
                    phosphorus={product.nutrition_phosphorus}
                    phosphorusLevel={phosphorusLevel}
            
                    taurine={product.nutrition_taurine}
                    taurineLevel={taurineLevel}
            
                    like={true}
                />
            )
        }
    }

    searchStr() {
        let outputStr = ''
        let urlParams = new URLSearchParams(location.search)
        let convertDic = {
            pet: '寵物',
            status: '寵物狀態',
            special_demand: '商品需求',
            taste: '口味',
            origin: '產地',
            verify: '認證',
            nutrition_calories: '營養素_熱量',
            nutrition_portein: '營養素_蛋白質',
            nutrition_fat: '營養素_脂肪',
            nutrition_cellulose: '營養素_纖維素',
            nutrition_calcium: '營養素_鈣',
            nutrition_phosphorus: '營養素_磷',
            nutrition_taurine: '營養素_牛磺酸',
            size: '包裝大小',
            demand: '特殊疾病',
        }
        for (var param of urlParams.entries()) {
            outputStr += `${convertDic[param[0]]}:[${param[1]}]/`
        }
        return outputStr
    }

    basicParam() {
        let urlParams = new URLSearchParams(location.search)
        let param = {
          limit: this.state.limit,
          offset: this.state.offset,
          sort: this.state.sort,
          desc: this.state.desc
        }
        for (var pair of urlParams.entries()) {
            param[pair[0]] = pair[1]
        }

        return param
    }

    render() {
        let products = []
        let i = 0
        while (this.state.products.length > i) {
            let tmp_products = [i, i+1, i+2]
            .map(this.createProductCard)
            .filter((n)=>{return n})

            products.push(
                <CardLine>
                    {tmp_products}
                </CardLine>
            )
            i += 3
        }

        return (
            <Main>
                <Container>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <MainTitle>篩選結果</MainTitle>
                        <SubTitle>{ typeof window !== 'undefined' && this.searchStr() }</SubTitle>
                        <RecordBtn/>
                        <DoubleInput
                            options1={[
                                <option value="price">價錢</option>,
                                <option value="origin">產地</option>,
                                <option value="nutrition_calories">營養素_熱量</option>,
                                <option value="nutrition_portein">營養素_蛋白質</option>,
                                <option value="nutrition_fat">營養素_脂肪</option>,
                                <option value="nutrition_cellulose">營養素_纖維素</option>,
                                <option value="nutrition_calcium">營養素_鈣</option>,
                                <option value="nutrition_phosphorus">營養素_磷</option>,
                                <option value="nutrition_taurine">營養素_牛磺酸</option>,
                                <option value="size">包裝大小</option>,
                            ]}
                            options2={[
                                <option value="true">高到低</option>,
                                <option value="false">低到高</option>,
                            ]}
                            onChange={evt => {
                                let param = this.basicParam()
                                param[evt.target.name] = evt.target.value
                                this.getProducts(param)
                            }}
                        />
                    </div>
                    
                    <hr style={{ border: `1px solid ${colors.prussianBlue}`, marginBottom: 40 }} />
                    { products }
                </Container>

                <PaginatorContainer>
                    <Paginator
                      breakLabel={'...'}
                      pageCount={this.state.total_page}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={9}
                      initialPage={0}
                      onPageChange={({ selected }) => {
                        let param = this.basicParam()
                        param.offset = selected * this.state.limit
                        this.getProducts(param)
                      }}
                    />
                </PaginatorContainer>
            </Main>
        )
    }
}

