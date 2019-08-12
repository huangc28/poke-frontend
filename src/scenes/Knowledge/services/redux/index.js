import { createAction, handleActions } from 'redux-actions'

import * as loadingStates from '@poke/constants/loadingState'

export const types = {
  FETCH_HOT_ARTICLES: 'FETCH_HOT_ARTICLES',
  FETCH_HOT_ARTICLES_SUCCESS: 'FETCH_HOT_ARTICLES_SUCCESS',

  SAY_HELLO: 'SAY_HELLO',
}

export const fetchHotArticles = createAction(types.FETCH_HOT_ARTICLES)
export const fetchHotArticlesSuccess = createAction(types.FETCH_HOT_ARTICLES_SUCCESS, hotArticles => ({
  hotArticles,
}))

export const sayHello = createAction(types.SAY_HELLO)

const initialState = {
  loading: loadingStates.EMPTY,
  error: null,
  hotArticles: [],

  say: 'cry',
}

const reducer = handleActions({
  [types.FETCH_HOT_ARTICLES]: (state, action) => {
    console.log('trigger FETCH_ARTICLES')
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
    // console.log('reducer FETCH_HOT_ARTICLES_SUCCESS', action.payload.hotArticles)

    return {
      ...state,
      hotArticles: [...action.payload.hotArticles],
      loading: loadingStates.READY,
    }
  },

  [types.SAY_HELLO]: (state) => {
    return {
      ...state,
      say: 'hello world',
    }
  }
}, initialState)

export default reducer

export const selectHotArticles = state => state.knowledge.hotArticles