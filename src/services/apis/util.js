import url from 'url'
import queryString from 'querystring';
import fetch from 'axios'


import jQuery from 'jquery'

export const buildApiUrl = (apiPath, queries = {}) => {
    const apiUrl = `/api/v1/${apiPath}?${jQuery.param(queries)}`
    // console.log(apiUrl)
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
