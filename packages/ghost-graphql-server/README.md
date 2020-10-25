# `@foo-software/ghost-graphql-server`

A GraphQL server for [Ghost](https://ghost.org/). This project exports an [Apollo Server](https://www.apollographql.com/docs/apollo-server/) class with pre-defined options to provide querying of a Ghost blog API programmatically and exposes a CLI for command line usage. Below are features of this project.

- Included types for TypeScript support (this project is written in TypeScript as a matter of fact).
- Exports an Apollo Server class as a module supporting overriding options (to override the pre-populated options that resolve Ghost API endpoints).
- Exposes a CLI (with limited options).

_If you're looking to import resolvers or other pieces independently - head over to the [`@foo-software/ghost-graphql` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql)._

## Table of Contents

- [Ghost Content API](#ghost-content-api)
  - [Pagination and Filtering](#pagination-and-filtering)
- [Programmatic Usage](#programmatic-usage)
  - [`createGhostGraphQLServer` Options](#createghostgraphqlserver-options)
- [CLI Usage](#cli-usage)
  - [CLI Options](#cli-options)
- [Docker Usage](#docker-usage)
- [Environment Variables](#environment-variables)
- [Schema](#schema)

## Ghost Content API

See the [`@foo-software/ghost-graphql` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#ghost-content-api).

#### Pagination and Filtering

See the [`@foo-software/ghost-graphql` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#pagination-and-filtering).

## Programmatic Usage

It's important to note that [some enviroment variables](#environment-variables) are required.

```javascript
import { createGhostGraphQLServer } from '@foo-software/ghost-graphql-server';

const startServer = async () => {
  try {
    const server = createGhostGraphQLServer();
    await server.listen(port);
    console.log(`Ghost GraphQL server is running on port ${port} 🚀`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
```

Or with options. You can use any [options available to `Apollo Server`](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#options).

```javascript
const server = createGhostGraphQLServer({
  onHealthCheck: () => {
    return Promise.resolve();
  },
});
```

#### `createGhostGraphQLServer` Options

You can use any [options available to `Apollo Server`](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#options).

## CLI Usage

Install the package globally.

```bash
npm install @foo-software/ghost-graphql-server -g
```

Run the server with required environment variables.

```bash
GHOST_API_KEY=$GHOST_API_KEY GHOST_URL=$GHOST_URL \
  ghost-graphql-server --port 4000
```

#### CLI Options

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>port</code></td>
    <td>The port for GraphQL server to run on.</td>
    <td>number</td>
    <td>no</td>
    <td><code>4000</code></td>
  </tr>
</table>

## Docker Usage

```bash
docker run \
  -p 127.0.0.1:4000:4000/tcp \
  --env GHOST_API_KEY=$GHOST_API_KEY \
  --env GHOST_URL=$GHOST_URL \
  foosoftware/ghost-graphql-server:latest \
  ghost-graphql-server --port 4000
```

## Environment Variables

See the [`@foo-software/ghost-graphql` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#environment-variables).

## Schema

The schema structure can be seen in [schema.graphql of the `@foo-software/ghost-graphql` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql/schema.graphql).
