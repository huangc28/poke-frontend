import { all, call } from 'redux-saga/effects'

import knowledge from '../../scenes/Knowledge/services/sagas'

export default function * () {
  yield all([
    call(knowledge),
  ])
}