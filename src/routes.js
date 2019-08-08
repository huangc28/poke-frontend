import App from './App'

import Home from './scenes/Home'
import Knowledge from './scenes/Knowledge'
import FoodKnowledge from './scenes/FoodKnowledge'

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
      }
    ],
  }
]

export default routes;