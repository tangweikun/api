require('dotenv').config()
import fetch from 'node-fetch'
global.fetch = fetch

export * from './github'
