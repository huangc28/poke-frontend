import { all, call } from 'redux-saga/effects'

import hotArticles from './hotArticles'
import singleArticle from '../../scenes/SingleArticle/services/sagas'

export default function * () {
  yield all([
    call(hotArticles),
    call(singleArticle),
  ])
}