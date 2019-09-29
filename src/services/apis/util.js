import url from 'url'
import queryString from 'querystring';
import fetch from 'axios'

import config from '@poke/config'
import jQuery from 'jquery'

export const buildApiUrl = (apiPath, queries = {}) => {
    const apiUrl = `${config.POKE_ENDPOINT}/${apiPath}?${jQuery.param(queries)}`
    return apiUrl
}


export const fetchApi = (path, method = 'GET', { headers = {}, params = {} } = {}, ...options) => {
  const apiUrl = buildApiUrl(path, params)

  return fetch({
    method,
    mode: 'cors',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  })
  .then(res => res.data)
  .catch(err => {
    throw err
  })
}
