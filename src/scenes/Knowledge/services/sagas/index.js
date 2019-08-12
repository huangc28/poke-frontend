import { all, takeLatest, call, put } from 'redux-saga/effects'

import * as apis from '../apis'

import { types, fetchHotArticlesSuccess } from '../redux'

function * fetchHotArticles() {
  try {
    const resp = yield call(apis.fetchHotArticles)

    yield put(fetchHotArticlesSuccess(resp))
  } catch (error) {
    console.log('DEBUG error!', error)
  }
}

export default function * () {
  yield all([
    takeLatest(types.FETCH_HOT_ARTICLES, fetchHotArticles)
  ])
}