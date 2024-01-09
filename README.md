# The Helios Project

A Journaling app written in JavaScript using the Next.js framework. The purpose of this app, other than to provide a web based journaling experience, is to leverage the full Vercel development suite to discover the benifits and limitations of said service.

## Project requirenments

1. Node
2. nvm
3. PostgreSQL
4. Redis

## Setup

1. copy enviornment variables - `cp env.example env.local`
2. check and use correct Node version - `nvm install && nvm use`
3. install dependencies - `npm install`
4. run developer server - `npm run dev`

## Postgresql

### Seed data

1. make sure local postgres instance is running
2. run `npm run postges::seed`
3. for first time users answer `y` to both questions

### Drop data

1. make sure local postgres instance is running
2. run `npm run postgres::drop`
3. enter `y` when promted

### Update Seed data

[todo]

## Redis

1. Add local redis url for SESSIONS_URL (Default is redis://localhost:6379)
2. Select a TTL (Time To Live) and set it to SESSIONS_TTL (Calculated in seconds)
3. Toggle `DISABLE_SESSIONS` to false to use live redis data
