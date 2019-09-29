import { fetchApi } from '@poke/services/apis/util'

export const fetchHotArticles = () => (
  fetchApi('articles', 'GET', {
    params: {
      limit: 5,
    }
  })
)