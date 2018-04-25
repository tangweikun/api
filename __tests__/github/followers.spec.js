import { github_followers } from '../../src'

test('test', () => {
  expect.assertions(1)
  return github_followers('tangweikun', 0).then(data => {
    expect(true).toBe(true)
    console.log(data)
  })
})
