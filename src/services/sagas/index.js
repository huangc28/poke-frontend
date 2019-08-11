import { all, takeLatest, put } from 'redux-saga/effects'

import { types, sayHelloSuccess } from '../redux'

function * sayHelloFlow(action) {
  console.log('trigger hello world saga')
  yield put(sayHelloSuccess())
}

export default function * (context) {
  yield all([
    takeLatest(types.SAY_HELLO, sayHelloFlow)
  ])
}