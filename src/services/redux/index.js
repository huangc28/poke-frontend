import { combineReducers } from 'redux'
import { createActions, handleActions } from 'redux-actions'

export const types = {
  SAY_HELLO: 'SAY_HELLO',
  SAY_HELLO_SUCCESS: 'SAY_HELLO_SUCCESS',
}

const INIT_STATE = {
  say_hello: '',
}

export const {
  sayHello,
  sayHelloSuccess,
} = createActions({
  [types.SAY_HELLO]: () => {},
  [types.SAY_HELLO_SUCCESS]: () => {},
})

const helloReducer = handleActions({
  [types.SAY_HELLO]: (state, action) => state,
  [types.SAY_HELLO_SUCCESS]: (state, action) => ({
    ...state,
    say_hello: 'hello world',
  }),
}, INIT_STATE)

export default combineReducers({
  sayHello: helloReducer,
})