import { createAction, handleActions } from 'redux-actions'

import * as loadingStates from '@poke/constants/loadingState'

export const types = {
  FETCH_CAN_ARTICLES: 'FETCH_CAN_ARTICLES',
  FETCH_CAN_ARTICLES_SUCCESS: 'FETCH_CAN_ARTICLES_SUCCESS',
  FETCH_CAN_ARTICLES_FAILED: 'FETCH_CAN_ARTICLES_FAILED',
}

export const fetchCanArticles = createAction(
  types.FETCH_CAN_ARTICLES,
  ({ limit = 5, offset = 0 } = {}) => ({
    limit,
    offset,
  })
)

export const fetchCanArticlesSuccess = createAction(
  types.FETCH_CAN_ARTICLES_SUCCESS,
  (totalCount, articles) => ({
    totalCount,
    articles,
  })
)

export const fetchCanArticlesFailed = createAction(types.FETCH_CAN_ARTICLES_FAILED)

const initialState = {
  loading: loadingStates.EMPTY,
  totalCount: 0,
  error: null,
  canArticles: [],
}

export default  handleActions({
  [types.FETCH_CAN_ARTICLES]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: loadingStates.LOADING,
    }
  },
  [types.FETCH_CAN_ARTICLES_SUCCESS]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: loadingStates.READY,
      totalCount: action.payload.totalCount,
      articles: action.payload.articles,
    }
  },
  [types.FETCH_CAN_ARTICLES_FAILED]: (state, action) => {
    return {
      ...state,
      error: action.payload.message,
      loading: loadingStates.ERROR,
    }
  }
}, initialState)

export const selectCanArticles = state => state.foodKnowledge.canArticles.articles
export const selectCanArticlesTotalCount = state => state.foodKnowledge.canArticles.totalCount