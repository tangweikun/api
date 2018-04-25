import { github_userInfo } from '../../src'

test('test', () => {
  expect.assertions(1)
  return github_userInfo('tangweikun').then(data => {
    expect(true).toBe(true)
    console.log(data)
  })
})

it('test', done => {
  github_userInfo().then(res => {
    console.log(res)
    done()
  })
})
