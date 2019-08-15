import { all, call } from 'redux-saga/effects'

import canArticles from './canArticles'
import dryFoodArticles from './dryFoodArticles'

export default function * () {
  yield all([
    call(canArticles),
    call(dryFoodArticles),
  ])
}