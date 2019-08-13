import { combineReducers } from 'redux'

import hotArticles from './hotArticles'
import nutritionArticles from './nutritionArticles'

export default combineReducers({
  hotArticles,
  nutritionArticles,
})
