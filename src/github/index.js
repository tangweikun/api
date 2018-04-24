import fetch from 'node-fetch'

export async function github_userInfo() {
  const res = await fetch('https://api.github.com/users/tangweikun')
  const json = await res.json()

  return json
}
