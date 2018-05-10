# Api Center

## About

Get data without api

## Installation

```js
yarn add api-collection
```

## Features

* API from 'https://api.github.com'

## Quick Start

> Start with Demo

```js
git clone 'https://github.com/tangweikun/api'
cd api
cd examples
yarn // or 'npm install'
yarn watch // or npm run watch
```

> Start with your own project

```js
// 1. Install `api-collection`
yarn add api-collection

// 2. Import from `api-collection`
import { github } from 'api-collection'

// 3. Get the data
const username = 'tangweikun'
github('userInfo', { username }).then(data => console.log(data))
```

## Document

### github (https://api.github.com)

> [users](https://developer.github.com/v3/users/)

* GET /users/:username
* GET /user (authenticated)

> [followers](https://developer.github.com/v3/users/followers/)

* GET /users/:username/followers
* GET /user/followers (authenticated)

> [starred](https://developer.github.com/v3/activity/starring/)

* GET /users/:username/starred
* GET /user/starred (authenticated)
