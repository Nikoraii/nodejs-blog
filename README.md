# Node and Express Blog REST API
> Full CRUD REST API using Node.js with no framework
Hosted on [Cyclic](https://long-teal-salmon-kilt.cyclic.app/)

```
# Routes
- User authentication
POST     /api/auth/register
POST     /api/auth/login

- User
PUT      /api/users/:id
DELETE   /api/users/:id
GET      /api/users/:id

- Post
GET      /api/posts
POST     /api/posts
GET      /api/posts/:id
PUT      /api/posts/:id
DELETE   /api/posts/:id

- Comment
POST     /api/posts/:id/comments
```

## Usage
```
# Install dependencies
npm install
yarn install

# Run in develpment
npm run dev
yarn run dev

# Run in production
npm start
yarn start
```
