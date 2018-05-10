import { github } from '../src'

describe('github', () => {
  // it('followers', () => {
  //   github('followers', { username: 'tangweikun' }).then(data => {
  //     console.log('followers:\n', data)
  //   })
  //   github('followers_authorization', { page: 2 }).then(data => {
  //     console.log('followers:\n', data)
  //   })
  // })
  // it('starred', () => {
  //   github('starred', { username: 'tangweikun' }).then(data => {
  //     console.log('starred:\n', data)
  //   })
  //   github('starred_authorization', { page: 3 }).then(data => {
  //     console.log('starred_authorization:\n', data)
  //   })
  // })
  it('user', () => {
    github('user_authorization').then(data => {
      console.log('user_authorization:\n', data)
    })
    github('user', { username: 'tangweikun' }).then(data => {
      console.log('user:\n', data)
    })
  })
})
