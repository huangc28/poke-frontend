import { fetchApi } from '@poke/services/apis/util'

export const fetchCanArticles = ({ limit, offset }) => (
  fetchApi('articles', 'GET', {
    params: {
      category: '罐罐資料庫',
      sort: 'updated_at',
      limit,
      offset,
    }
  })
)

export const fetchDryFoodArticles = ({ limit, offset }) => (
  fetchApi('articles', 'GET', {
    params: {
      category: '乾飼料資料庫',
      sort: 'updated_at',
      limit,
      offset,
    }
  })
)