import { github } from '../src'

describe('github', () => {
  it('followers', () => {
    github('followers', { username: 'tangweikun' }).then(data =>
      console.log('followers:\n', data),
    )
  })

  it('userInfo', () => {
    github('userInfo', { username: 'tangweikun' }).then(data => {
      console.log('userInfo:\n', data)
    })
  })
})
