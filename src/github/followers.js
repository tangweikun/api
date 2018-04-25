export async function github_followers(username = 'github', page) {
  return (await fetch(
    `https://api.github.com/users/${username}/followers${
      page ? `?page=${page}` : ''
    }`,
  )).json()
}
