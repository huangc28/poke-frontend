import { combineReducers } from 'redux'

import canArticles from './canArticles'
import dryFoodArticles from './dryFoodArticles'

export default combineReducers({
  canArticles,
  dryFoodArticles,
})