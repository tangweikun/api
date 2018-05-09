export async function github(apiName, props) {
  return (await fetch(`${githubBaseUrl}${strategies(props)[apiName]}`)).json()
}

const githubBaseUrl = 'https://api.github.com/users/'

const strategies = props => ({
  userInfo: `${props.username}`,
  followers: `${props.username}/followers${props.page ? `?page=${page}` : ''}`,
})
