## Node should deliver proper static assets to frontend

Use webpack-isomorphic tool to let nodejs know what has been bundled. Nodejs send the HTML that has the proper `<link>` to external assets (js / css) for the browser to load properly


### Todos

#### Pagination article structure

Right now we are fetching the articles from the API every times when user clicked on page. However, we should memoize the page we've had fetched. For example, user should not be needing to refetch article from page 1 if he / she has already fetched the articles already.

optimal article structure:

```
{
  1: [
    { article_one },
    { article_two },
    { article_three },
  ],
  2: [
    { article_one },
    { article_two },
    { article_three },
  ]
  ...
}
```

#### Rename IconStat to Iconlabel

#### Top article should be stationary. It should stay on top. Page change should not effect the the top article.

### Addendum

 - [10 useful tips on styled components](https://medium.com/@pitipatdop/10-useful-tips-for-styled-components-b7710b021e6a)
 - [Very useful article to customize font](https://css-tricks.com/three-techniques-performant-custom-font-usage/)
 - [Quick guide to compound components](https://blog.logrocket.com/guide-to-react-compound-components-9c4b3eb482e9/)
 - [Kent c Dodds Compound components](https://kentcdodds.com/blog/compound-components-with-react-hooks/)
 - [Eric Elliot - hooks can't replace redux](https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672)
 - [Prevent xss on react app](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0)