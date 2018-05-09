import { github_userInfo } from 'api-collection'

describe('github', () => {
  it('github_userInfo', () => {
    github_userInfo('github').then(data =>
      console.log('github_userInfo:\n', data),
    )
  })
})
