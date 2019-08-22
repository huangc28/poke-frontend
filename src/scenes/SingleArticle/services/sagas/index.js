import { all, call, put, takeLatest } from 'redux-saga/effects'

import {
  types,
  fetchArticleFailed,
  fetchArticleSuccess,
} from '../redux/singleArticle'
import { fetchHotArticles } from '../apis'

function * fetchSingleArticleFlow(action) {
  const { articleID } = action.payload

  try {
    const article = yield call(fetchHotArticles, articleID)

    console.log('DEBUG1', article)

    yield put(fetchArticleSuccess(article))
  } catch (err) {
    yield put(fetchArticleFailed(err))
  }
}

export default function * () {
  yield all([
    takeLatest(types.FETCH_ARTICLE, fetchSingleArticleFlow),
  ])
}