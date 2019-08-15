import compose from './compose'

export default compose(
  ([topArticle, restArticle]) => [topArticle[0] || {}, restArticle],
  articles => [articles.slice(0, 1), articles.slice(1)]
)
