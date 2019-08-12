// import { fetchApi } from '@poke/services/apis/util'
import { fetchHotArticles } from './'

describe('fetch articles api', () => {
  test('fetch hot articles', done => {
    fetchHotArticles()
      .then(resp => {
        expect(resp.length).toBeGreaterThan(0)

        done()
      })
  })
})