import { all, call } from 'redux-saga/effects'

import knowledge from '../../scenes/Knowledge/services/sagas'

import foodKnowledge from '../../scenes/FoodKnowledge/services/sagas'

import hotArticles from './hotArticles'

import singleArticle from '../../scenes/SingleArticle/services/sagas'

export default function * () {
  yield all([
    call(knowledge),
    call(hotArticles),
    call(foodKnowledge),
    call(singleArticle),
  ])
}