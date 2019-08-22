import App from './App'

import Home from './scenes/Home'
import Knowledge from './scenes/Knowledge'
import FoodKnowledge from './scenes/FoodKnowledge'
import SingleArticle from './scenes/SingleArticle'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/knowledge',
        exact: true,
        component: Knowledge,
      },
      {
        path: '/food-knowledge',
        exact: true,
        component: FoodKnowledge,
      },
      {
        path: '/articles/:articleID',
        exect: true,
        component: SingleArticle,
      }
    ],
  }
]

export default routes;