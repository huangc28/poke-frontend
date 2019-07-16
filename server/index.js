import http from 'http'

import app from './app'

const PORT = process.env.PORT || 3000
const server = http.createServer(app)

export default bundleInfo => {
  console.log('bundle info', bundleInfo)

  server.listen(PORT , err => {
    if (err) {
      console.log(err)
    }

    console.log(`server now hosted on port ${PORT}`)
  })
}

