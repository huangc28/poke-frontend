import React, { Component } from 'react'
import T from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

class ProviderWithRouter extends Component {
  constructor (props) {
    super(props)

    const {
      initialState,
      rootReducer,
      history,
      store,
    } = props;

    this.store = store || configureStore(rootReducer, initialState, {
      history,
    })
  }

  render () {
    return (
      <Provider store={this.store}>
        { this.props.children }
      </Provider>
    )
  }
}

ProviderWithRouter.propTypes = {
  children: T.node,
  initialState: T.object,
  rootReducer: T.func,
  history: T.object.isRequired,
  store: T.oneOfType([
    T.oneOf([null]),
    T.object,
  ]),
}

ProviderWithRouter.defaultProps = {
  initialState: {},
  store: null,
}

export default withRouter(ProviderWithRouter)