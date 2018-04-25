export async function github_userInfo(username = 'github') {
  return (await fetch(`https://api.github.com/users/${username}`)).json()
}
