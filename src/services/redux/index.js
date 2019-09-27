import { combineReducers } from 'redux'

import hotArticles from './hotArticles'
import singleArticle from '../../scenes/SingleArticle/services/redux/singleArticle'

export default combineReducers({
  hotArticles,
  singleArticle,
})