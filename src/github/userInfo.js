export async function github_userInfo(username = 'github') {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const json = await res.json()

  return json
}
