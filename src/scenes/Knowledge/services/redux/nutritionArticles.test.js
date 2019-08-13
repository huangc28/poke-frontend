import reducer, { fetchNutritionArticles } from './nutritionArticles'

describe('nutrition articles redux action', () => {
  test('giving action creator an Error object', () => {
    const obj = fetchNutritionArticles(new Error('some error'))

    expect(obj.payload instanceof Error).toBeTruthy()
  })

  test('reducer handle error action creator', () => {
    const resp = reducer(
      {
        articles: [],
        loading: 'EMPTY',
      }, fetchNutritionArticles(new Error('some error'))
    )

    console.log('resp', resp)
  })
})