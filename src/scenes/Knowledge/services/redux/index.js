import { createAction, handleActions } from 'redux-actions'

import * as loadingStates from '@poke/constants/loadingState'

export const types = {
  FETCH_HOT_ARTICLES: 'FETCH_HOT_ARTICLES',
  FETCH_HOT_ARTICLES_SUCCESS: 'FETCH_HOT_ARTICLES_SUCCESS',
}

export const fetchHotArticles = createAction(types.FETCH_HOT_ARTICLES)
export const fetchHotArticlesSuccess = createAction(types.FETCH_HOT_ARTICLES_SUCCESS, hotArticles => ({
  hotArticles,
}))

const initialState = {
  loading: loadingStates.EMPTY,
  error: null,
  hotArticles: [],
}

const reducer = handleActions({
  [types.FETCH_HOT_ARTICLES]: (state, action) => {
    if (action.error) {
      return {
        ...state,
        error: action.payload.message,
        loading: loadingStates.ERROR,
      }
    }

    return {
      ...state,
      error: null,
      loading: loadingStates.LOADING,
    }
  },
  [types.FETCH_HOT_ARTICLES_SUCCESS]: (state, action) => {
    return {
      ...state,
      error: null,
      hotArticles: action.payload.hotArticles,
      loading: loadingStates.READY,
    }
  },
}, initialState)

export default reducer

export const selectHotArticles = state => state.knowledge.hotArticles