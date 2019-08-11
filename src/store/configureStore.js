import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../services/sagas'

let _store = {}

export default function (rootReducer, preloadedState = {}, context = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = (
    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || compose

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware
      )
    )
  )

  sagaMiddleware.run(rootSaga, context)

  if (module.hot) {
    module.hot.accept('../services/redux', () => {
      const nextRootReducer = require('../services/redux').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  // be able to run saga on the serverside to acheive server side rendering.
  store.runSagas = sagaMiddleware.run;

  _store = store

  return store
}

export const getStore = () => _store