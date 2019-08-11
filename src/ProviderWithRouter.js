import React from 'react'
import T from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

const ProviderWithRouter = ({ children, initialState, rootReducer, history, store }) => {
  if (!store) {
    store = configureStore(rootReducer, initialState, {
      history, // On every invocation of saga
    })
  }

  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}

ProviderWithRouter.propTypes = {
  children: T.node,
  initialState: T.object,
  rootReducer: T.func,
  history: T.object.isRequired,
  store: T.oneOfType([
    null,
    T.object,
  ]),
}

ProviderWithRouter.defaultProps = {
  initialState: {},
  store: null,
}

export default withRouter(ProviderWithRouter)