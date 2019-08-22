import { createAction, handleActions } from 'redux-actions'

import * as loadingStates from '@poke/constants/loadingState'

export const types = {
  FETCH_ARTICLE: 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS: 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_FAILED: 'FETCH_ARTICLE_FAILED',
}

export const fetchArticle = createAction(
  types.FETCH_ARTICLE,
  articleID => ({
    articleID,
  })
)

export const fetchArticleSuccess = createAction(
  types.FETCH_ARTICLE_SUCCESS,
  article => ({ article })
)

export const fetchArticleFailed = createAction(types.FETCH_ARTICLE_FAILED)

const initStates = {
  loading: loadingStates.EMPTY,
  error: null,
  article: {},
}

export default handleActions({
  [types.FETCH_ARTICLE]: (state, action) => ({
    ...state,
    error: null,
    loading: loadingStates.LOADING,
  }),
  [types.FETCH_ARTICLE_SUCCESS]: (state, action) => ({
    ...state,
    loading: loadingStates.READY,
    error: null,
    article: action.payload.article,
  }),
  [types.FETCH_ARTICLE_FAILED]: (state, action) => ({
    ...state,
    loading: loadingStates.ERROR,
    error: action.payload.message,
  }),
}, initStates)

export const selectArticle = state => state.singleArticle.article