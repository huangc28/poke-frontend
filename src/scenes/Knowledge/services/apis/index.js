import { fetchApi } from '@poke/services/apis/util'

export const fetchHotArticles = () => (
  fetchApi('articles', 'GET', {
    params: {
      limit: 5,
    }
  })
)

export const fetchNutritionArticles = ({ limit = 5, offset = 0 } = {}) => (
  fetchApi('articles', 'GET', {
    params: {
      category: '營養小百科',
      sort: 'created_at',
      limit,
      offset,
    }
  })
)