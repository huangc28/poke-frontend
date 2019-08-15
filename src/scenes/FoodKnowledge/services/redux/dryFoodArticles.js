import { createAction, handleActions } from 'redux-actions'

import * as loadingStates from '@poke/constants/loadingState'

export const types = {
  FETCH_DRY_FOOD_ARTICLES: 'FETCH_DRY_FOOD_ARTICLES',
  FETCH_DRY_FOOD_ARTICLES_SUCCESS: 'FETCH_DRY_FOOD_ARTICLES_SUCCESS',
  FETCH_DRY_FOOD_ARTICLES_FAILED: 'FETCH_DRY_FOOD_ARTICLES_FAILED',
}

export const fetchDryFoodArticles = createAction(
  types.FETCH_DRY_FOOD_ARTICLES,
  ({ limit = 5, offset = 0 } = {}) => ({
    limit,
    offset,
  })
)

export const fetchDryFoodArticlesSuccess = createAction(
  types.FETCH_DRY_FOOD_ARTICLES_SUCCESS,
  (totalCount, articles) => ({
    totalCount,
    articles,
  })
)

export const fetchDryFoodArticlesFailed = createAction(types.FETCH_DRY_FOOD_ARTICLES_FAILED)

const initialState = {
  loading: loadingStates.EMPTY,
  totalCount: 0,
  error: null,
  canArticles: [],
}

export default  handleActions({
  [types.FETCH_DRY_FOOD_ARTICLES]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: loadingStates.LOADING,
    }
  },
  [types.FETCH_DRY_FOOD_ARTICLES_SUCCESS]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: loadingStates.READY,
      totalCount: action.payload.totalCount,
      articles: action.payload.articles,
    }
  },
  [types.FETCH_DRY_FOOD_ARTICLES_FAILED]: (state, action) => {
    return {
      ...state,
      error: action.payload.message,
      loading: loadingStates.ERROR,
    }
  }
}, initialState)

export const selectDryFoodArticles = state => state.foodKnowledge.dryFoodArticles.articles
export const selectDryFoodArticlesTotalCount = state => state.foodKnowledge.dryFoodArticles.totalCount