import App from './App'

import Home from './scenes/Home'
import Knowledge from './scenes/Knowledge'

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
      }
    ],
  }
]

export default routes;