import { createAction, handleActions } from 'redux-actions'

import * as loadingStates from '@poke/constants/loadingState'

import { PER_PAGE } from '../../constants/articles'

export const types = {
  FETCH_NUTRITION_ARTICLES: 'FETCH_NUTRITION_ARTICLES',
  FETCH_NUTRITION_ARTICLES_SUCCESS: 'FETCH_NUTRITION_ARTICLES_SUCCESS',
  FETCH_NUTRITION_ARTICLES_FAILED: 'FETCH_NUTRITION_ARTICLES_FAILED',
}

export const fetchNutritionArticles = createAction(
  types.FETCH_NUTRITION_ARTICLES,
  ({ limit = PER_PAGE, offset = 0 } = {}) => ({
    limit,
    offset,
  })
)

export const fetchNutritionArticlesSuccess = createAction(
  types.FETCH_NUTRITION_ARTICLES_SUCCESS,
  ({ totalCount, articles }) => ({
    totalCount,
    articles,
  })
)

export const fetchNutritionArticlesFailed = createAction(types.FETCH_NUTRITION_ARTICLES_FAILED)

const initialState = {
  articles: [],
  totalCount: 0,
  loading: loadingStates.EMPTY,
}

const reducer = handleActions({
  [types.FETCH_NUTRITION_ARTICLES]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: loadingStates.LOADING,
    }
  },
  [types.FETCH_NUTRITION_ARTICLES_SUCCESS]: (state, action) => {
    return {
      ...state,
      error: null,
      articles: action.payload.articles,
      totalCount: action.payload.totalCount,
      loading: loadingStates.READY,
    }
  },
  [types.FETCH_NUTRITION_ARTICLES_FAILED]: (state, action) => {
    return {
      ...state,
      error: action.payload.message,
      loading: loadingStates.ERROR,
    }
  }
}, initialState)

export default reducer
export const selectNutritionArticles = state => state.knowledge.nutritionArticles.articles
export const selectNutritionArticlesTotalCount = state => state.knowledge.nutritionArticles.totalCount