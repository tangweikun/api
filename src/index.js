import fetch from 'node-fetch'

function fn() {
  fetch('https://api.github.com/users/tangweikun')
    .then(res => res.json())
    .then(json => console.log(json))
}

fn()
