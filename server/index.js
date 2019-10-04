import http from 'http'

import app from './app'

const PORT = process.env.PORT || 3000

export default bundleInfo => {

  const server = http.createServer(app(bundleInfo))

  server.listen(PORT , err => {
    if (err) {
      console.log(err)
    }

    console.log(`POKE server now hosted on port ${PORT}`)
  })
}

