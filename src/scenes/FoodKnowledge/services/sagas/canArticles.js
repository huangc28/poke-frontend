import { all, takeLatest, call, put } from 'redux-saga/effects'

import {
  types,
  fetchCanArticlesSuccess,
  fetchCanArticlesFailed,
} from '../redux/canArticles'
import { fetchCanArticles } from '../apis'

function * fetchCanArticlesFlow(action) {
  const {
    limit,
    offset
  } = action.payload

  try {
    const resp = yield call(fetchCanArticles, {
      limit,
      offset
    })

    const {
      articles,
      total_count
    } = resp

    yield put(fetchCanArticlesSuccess(total_count, articles))
  } catch (err) {
    yield put(fetchCanArticlesFailed(err))
  }
}

export default function * () {
  yield all([
    takeLatest(types.FETCH_CAN_ARTICLES, fetchCanArticlesFlow)
  ])
}