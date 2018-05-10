import { lianjia } from '../src'

describe('github', () => {
  it('lianjia', () => {
    lianjia('beijing').then(data => {
      console.log(data)
    })
  })
})
