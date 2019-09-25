import App from './App'

import Home from './scenes/Home'
import Knowledge from './scenes/Knowledge'
import FoodKnowledge from './scenes/FoodKnowledge'
import SingleArticle from './scenes/SingleArticle'
import About from './scenes/About'
import Verify from './scenes/Verify'

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
      },
      {
        path: '/about',
        exact: true,
        component: About,
      },
      {
        path: '/verify',
        exect: true,
        component: Verify,
      }
    ],
  }
]

export default routes;