import { fetchApi } from '@poke/services/apis/util'

export const fetchHotArticles = articleID => fetchApi(`articles/${articleID}`, 'GET')