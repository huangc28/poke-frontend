import React, { Component } from 'react'
import styled from 'styled-components'
import $ from 'jquery'

import Main from '../../layouts/Main'
import Img from '@poke/components/Img'
import TopArticleLayout from '@poke/layouts/TopArticleLayout'
import HotArticles from '@poke/components/HotArticles'
import ArticleGrid from '@poke/components/ArticleGrid'
import ContactLayout from '@poke/layouts/ContactLayout'
import { buildApiUrl } from '@poke/services/apis/util'
import IconLabel from '@poke/components/IconLabel'
import convertDateTimeStringToTimestamp from '@poke/util/convertDateTimeStringToTimestamp'
import TimeAgo from '@poke/components/TimeAgo'
import { size14Mixin, size26Mixin } from '@poke/styles/font'
import colors from '@poke/styles/colors'
import { DateWhite, PPWhite, More as MoreIcon } from '@poke/components/Icons'
import Paginator from '@poke/components/Paginator'


const SectionOne = styled.div`
  min-height: 33rem;
`

const SectionTwo = styled.div`
  min-height: 30rem;
  height: 600px;
  background-color: #3c4e6b;
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

const IntroContainer = styled.div`
  float: left;
`

const Title = styled.p`
  ${size26Mixin}
  color: ${colors.white};
  margin: 0;
  letter-spacing: 0.8125rem;
`


const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.4375rem 3.875rem 0;
  & > div {
    margin-bottom: 4.625rem;
  }
`

const PaginatorContainer = styled.div`
  padding-bottom: 3.125rem;
  display: flex;
  text-align: center;
  justify-content: center;
`

const ArticleStat = styled.div`
  display: flex;
  margin-top: 1.5rem;
`
const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Summary = styled.span`
  ${size14Mixin}
  color: ${colors.white};
  margin: 1.625rem 0 0 0;
  line-height: 1.57;
  letter-spacing: 0.175rem;
`

const More = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 2.25rem 0 0 0;
`


class Knowledge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PER_PAGE: 5,
            total_page: 1,
            articles: [0,1,2,3,4].map((v,i)=>{return {title:'沒有新文章'}})
        }
        this.ajaxArticle = this.ajaxArticle.bind(this)
        this.countTotalPages = this.countTotalPages.bind(this)
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.title = 'POKE | 小百科'
        }
    }

    countTotalPages (perPage, totalCount) {
        const residual = totalCount % perPage
        let pages = Math.floor(totalCount / perPage)
      
        if (residual > 0) {
          pages++
        }
      
        return pages
    }

    ajaxArticle({ offset }){
        let params = {
            category: '營養小百科',
            sort: 'created_at',
            limit: this.state.PER_PAGE,
            offset,
        }
        let apiUrl = buildApiUrl('articles', params)
        
        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(data){ 
                let pageCount = this.countTotalPages(this.state.PER_PAGE, data.total_count)
                this.setState({
                    articles: this.state.articles.map((v,i) => {return data.articles[i] ? data.articles[i] : {'title': '沒有更多文章了'}}),
                    total_page: pageCount,
                })
            }.bind(this),
            error: function(err){ 
                throw err
            }.bind(this)
        })
    }

    render() {
        let first = this.state.articles[0]
        let firstArticle = (
            <TopArticleLayout
                left={
                    <React.Fragment>
                        <Topic>
                            <Pin/>
                            <p>營養小百科</p>
                        </Topic>

                        <IntroContainer onClick={() => {
                            if (!!first.article_id) location.href = `/articles/${first.article_id}`
                            }} 
                        >
                            <Img
                            src={ first.img || `https://via.placeholder.com/${600}x${420}`}
                            width={600}
                            height={420}
                            fallbackImgWidth={600}
                            fallbackImgHeight={420}
                            style={{ cursor: 'pointer' }}
                            />
                        </IntroContainer>
                        <div style={{ clear: 'both' }} />
                    </React.Fragment>
                }

                right={
                    <React.Fragment>
                        <Title onClick={() => {
                            if (!!first.article_id) location.href = `/articles/${first.article_id}`
                        }}
                        > 
                            { first.title } 
                        </Title>
                        <ArticleStat>
                            <IconLabel
                            icon={ <DateWhite width={16} height={16} /> }
                            label={<TimeAgo time={
                                !!first.updated_at
                                ? convertDateTimeStringToTimestamp(first.updated_at) 
                                : Date.now()
                            } />}
                            />
                            <IconLabel
                            icon={ <PPWhite width={16} height={16} /> }
                            label={ first.visit || 0}
                            />
                        </ArticleStat>
                        
                        <SummaryContent>
                            <Summary>
                            <div dangerouslySetInnerHTML={{ __html: first.descript }} />
                            </Summary>
                        
                            <More>
                            <IconLabel
                                icon={ <MoreIcon width={16} height={16} /> }
                                label='more'
                                onClick={() => {
                                    if (!!first.article_id) location.href = `/articles/${first.article_id}`
                                }}
                            />
                            </More>
                        </SummaryContent>
                    </React.Fragment>
                }
            >
            </TopArticleLayout>
        )

        let restArticle = [1,2,3,4].map( (v, i) => {
            let article = this.state.articles[v] 
            return (
                <ArticleGrid
                    key={i}
                    tagNum={v+1}
                    title={article.title}
                    summary={article.descript}
                    timeAgo={article.updated_at}
                    numViewed={article.visit}
                    onClickMore={() => {
                        if (!!article.article_id) location.href = `/articles/${article.article_id}` 
                    }}
                />
            )
        })

        return (
            <Main>
                <SectionOne>
                    <HotArticles
                      onClickArticle={({ articleID }) => location.href = `/articles/${articleID}`}
                    />
                </SectionOne>

                <SectionTwo>
                    {firstArticle}
                </SectionTwo>

                <ContactLayout>
                    <ArticlesContainer>
                        {restArticle}
                    </ArticlesContainer>
                    <PaginatorContainer>
                        <Paginator
                        breakLabel={'...'}
                        pageCount={this.state.total_page}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        initialPage={0}
                        onPageChange={({ selected }) => {
                            this.ajaxArticle({
                            offset: selected * this.state.PER_PAGE
                            })
                        }}
                        />
                    </PaginatorContainer>
                </ContactLayout>
            </Main>
        )
    }
}

export default Knowledge