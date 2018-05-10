import { lianjia } from 'api-collection'

describe('github', () => {
  it('lianjia', () => {
    lianjia('beijing').then(data => {
      console.log(data)
    })
  })
})
