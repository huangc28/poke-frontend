import { combineReducers } from 'redux'

import hotArticles from './hotArticles'
import knowledge from '../../scenes/Knowledge/services/redux'
import foodKnowledge from '../../scenes/FoodKnowledge/services/redux'

export default combineReducers({
  knowledge,
  hotArticles,
  foodKnowledge,
})