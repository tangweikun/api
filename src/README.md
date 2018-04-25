# Api Center

## About

Get data without api

## Installation

```js
yarn add api-collection
```

## Features

* API from 'https://api.github.com'

## Quick start

```js
// 1. Install `api-collection`
yarn add api-collection

// 2. Import from `api-collection`
import { github_userInfo } from 'api-collection'

// 3. Get the data
const username = 'github'
github_userInfo(username).then(data => console.log(data))
```
