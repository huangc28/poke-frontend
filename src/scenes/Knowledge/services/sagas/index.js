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

    yield put(fetchHotArticlesSuccess(resp))
  } catch (error) {
    yield put(fetchHotArticlesFailed(error))
  }
}

function * fetchNutritionArticlesFlow() {
  try {
    const resp = yield call(apis.fetchNutritionArticles)

    yield put(fetchNutritionArticlesSuccess(resp))
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