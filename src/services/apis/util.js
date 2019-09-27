import url from 'url'
import queryString from 'querystring';
import fetch from 'axios'

import config from '@poke/config'
 
export const buildApiUrl = (apiPath, queries = {}) => {
  const apiUrl = url.parse(`${config.POKE_ENDPOINT}/${apiPath}`);

  // get pre-existed query
  let queryObject = (apiUrl.query && queryString.parse(apiUrl.query)) || {};

  // merge queries
  queryObject = Object.assign(queryObject, queries);

  // if query object is not empty, assign query
  if (Object.keys(queryObject).length) {
    apiUrl.search = queryString.stringify(queryObject);
  }

  return apiUrl.format();
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
