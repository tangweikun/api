import { github_userInfo } from '../../src'

test('test', () => {
  expect.assertions(1)
  return github_userInfo('tangweikun').then(data => {
    expect(true).toBe(true)
    console.log(data)
  })
})
