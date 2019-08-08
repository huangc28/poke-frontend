import React from 'react'
import PropTypes from 'prop-types'

const ArticleExhibitLayout = ({ children }) => (
  <div>
    { children }
  </div>
)

ArticleExhibitLayout.propTypes = {
  children: PropTypes.node,
}

export default ArticleExhibitLayout