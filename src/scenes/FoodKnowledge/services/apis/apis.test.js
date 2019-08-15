import { fetchCanArticles } from './'

describe('/articles, can food', () => {
  test('GET /articles can food articles success', async () => {
    const resp = await fetchCanArticles({
      limit: 5,
      offset: 0,
    })

    expect(resp.total_count).toBe(4)
    expect(resp.articles.length).toBe(4)
  })
})