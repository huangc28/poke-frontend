import { all, call } from 'redux-saga/effects'

import hotArticles from './hotArticles'

export default function * () {
  yield all([
    call(hotArticles),
  ])
}