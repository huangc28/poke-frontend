import { call, put, takeLatest, all } from 'redux-saga/effects'

import { types } from '@poke/services/redux/hotArticles'

import { fetchHotArticles } from '../apis'
import { fetchHotArticlesSuccess, fetchHotArticlesFailed } from '../redux/hotArticles'

function * fetchHotArticlesFlow() {
  try {
    const resp = yield call(fetchHotArticles)

    const { articles } = resp

    yield put(fetchHotArticlesSuccess(articles))
  } catch (error) {
    yield put(fetchHotArticlesFailed(error))
  }
}

export default function * () {
  yield all([
    takeLatest(types.FETCH_HOT_ARTICLES, fetchHotArticlesFlow),
  ])
}