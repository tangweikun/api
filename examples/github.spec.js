import { github_userInfo, github_followers } from 'api-collection'

describe('github', () => {
  it('github_userInfo', () => {
    github_userInfo('github').then(data =>
      console.log('github_userInfo:\n', data),
    )
  })

  it('github_followers', () => {
    github_followers('tangweikun', 0).then(data => {
      console.log('github_follower:\n', data)
    })
  })
})
