import { createAction, handleActions } from 'redux-actions'

import * as loadingStates from '@poke/constants/loadingState'

export const types = {
  FETCH_NUTRITION_ARTICLES: 'FETCH_NUTRITION_ARTICLES',
  FETCH_NUTRITION_ARTICLES_SUCCESS: 'FETCH_NUTRITION_ARTICLES_SUCCESS',
  FETCH_NUTRITION_ARTICLES_FAILED: 'FETCH_NUTRITION_ARTICLES_FAILED',
}

export const fetchNutritionArticles = createAction(types.FETCH_NUTRITION_ARTICLES)
export const fetchNutritionArticlesSuccess = createAction(types.FETCH_NUTRITION_ARTICLES_SUCCESS, articles => ({
  articles,
}))
export const fetchNutritionArticlesFailed = createAction(types.FETCH_NUTRITION_ARTICLES_FAILED)

const initialState = {
  articles: [],
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