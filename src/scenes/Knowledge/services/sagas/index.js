import { all, takeLatest, call, put } from 'redux-saga/effects'

import * as apis from '../apis'

import {
  types as hotArticleTypes,
  fetchHotArticlesSuccess,
  fetchHotArticlesFailed,
} from '../redux/hotArticles'

import {
  types as nutritionArticleTypes,
  fetchNutritionArticlesSuccess,
  fetchNutritionArticlesFailed,
} from '../redux/nutritionArticles'

function * fetchHotArticlesFlow() {
  try {
    const resp = yield call(apis.fetchHotArticles)

    const { articles } = resp

    yield put(fetchHotArticlesSuccess(articles))
  } catch (error) {
    yield put(fetchHotArticlesFailed(error))
  }
}

function * fetchNutritionArticlesFlow(action) {
  const {
    limit,
    offset,
  } = action.payload

  try {
    const resp = yield call(apis.fetchNutritionArticles, [{
      limit,
      offset,
    }])

    const {
      total_count,
      articles,
    } = resp

    yield put(fetchNutritionArticlesSuccess({
      totalCount: total_count,
      articles,
    }))
  } catch (error) {
    yield put(fetchNutritionArticlesFailed(error))
  }
}

export default function * () {
  yield all([
    takeLatest(hotArticleTypes.FETCH_HOT_ARTICLES, fetchHotArticlesFlow),
    takeLatest(nutritionArticleTypes.FETCH_NUTRITION_ARTICLES, fetchNutritionArticlesFlow)
  ])
}