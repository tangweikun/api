export async function github(apiName, props = {}) {
  return (await fetch(`${baseUrl}${strategies(props)[apiName]}`)).json()
}

const baseUrl = 'https://api.github.com/'

const strategies = props => ({
  user: `users/${props.username}`,
  user_authorization: `user?access_token=${process.env.GITHUB_ACCESS_TOKEN}`,

  followers: `users/${props.username}/followers${
    props.page ? `?page=${props.page}` : ''
  }`,
  followers_authorization: `user/followers?access_token=${
    process.env.GITHUB_ACCESS_TOKEN
  }${props.page ? `&page=${props.page}` : ''}`,

  starred: `users/${props.username}/starred${
    props.page ? `?page=${props.page}` : ''
  }`,
  starred_authorization: `user/starred?access_token=${
    process.env.GITHUB_ACCESS_TOKEN
  }${props.page ? `&page=${props.page}` : ''}`,
})
