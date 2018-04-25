import fetch from 'node-fetch'

export async function github_followers(username = 'github', page) {
  const res = await fetch(
    `https://api.github.com/users/${username}/followers${
      page ? `?page=${page}` : ''
    }`,
  )
  const json = await res.json()

  return json
}
