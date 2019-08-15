import React from 'react'
import { compose } from 'redux'
import T from 'prop-types'
import { connect } from 'react-redux'

import { fetchHotArticles, selectHotArticles } from '@poke/services/redux/hotArticles'

function FetchHotArticles (WrappedComponent) {
  return class _FetchHotArticles extends React.Component {
    componentDidMount() {
      this.props.fetchHotArticles()
    }

    render () {
      const { articles } = this.props

      return (
        <WrappedComponent
          articles={articles}
        />
      )
    }
  }

  _FetchHotArticles.propTypes = {
    fetchHotArticles: T.func,
    articles: T.array,
  }

  _FetchHotArticles.defaultProps = {
    articles: [],
  }

  return _FetchHotArticles
}

const mapToProps = state => ({
  articles: selectHotArticles(state),
})

export default compose(
  connect(mapToProps, {
    fetchHotArticles,
  }),
  FetchHotArticles
)