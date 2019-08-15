import { all, takeLatest, call, put } from 'redux-saga/effects'

import {
  types,
  fetchDryFoodArticlesSuccess,
  fetchDryFoodArticlesFailed,
} from '../redux/dryFoodArticles'
import { fetchDryFoodArticles } from '../apis'

function * fetchDryFoodArticlesFlow(action) {
  const {
    limit,
    offset
  } = action.payload

  try {
    const resp = yield call(fetchDryFoodArticles, {
      limit,
      offset
    })

    const {
      articles,
      total_count
    } = resp

    yield put(fetchDryFoodArticlesSuccess(total_count, articles))
  } catch (err) {
    yield put(fetchDryFoodArticlesFailed(err))
  }
}

export default function * () {
  yield all([
    takeLatest(types.FETCH_DRY_FOOD_ARTICLES, fetchDryFoodArticlesFlow)
  ])
}