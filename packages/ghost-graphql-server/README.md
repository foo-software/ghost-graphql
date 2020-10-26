# `@foo-software/ghost-graphql-server`

A GraphQL server for [Ghost](https://ghost.org/). This project exports an [Apollo Server](https://www.apollographql.com/docs/apollo-server/) class with pre-defined options to provide querying of a Ghost blog API programmatically and exposes a CLI for command line usage. Below are features of this project.

- Included types for TypeScript support (this project is written in TypeScript as a matter of fact).
- Exports an Apollo Server class as a module supporting overriding options (to override the pre-populated options that resolve Ghost API endpoints).
- Exposes a CLI (with limited options).

## Table of Contents

- [Quick Start](#quick-start)
- [Ghost Content API](#ghost-content-api)
  - [Pagination and Filtering](#pagination-and-filtering)
- [Programmatic Usage](#programmatic-usage)
  - [`createGhostGraphQLServer` Options](#createghostgraphqlserver-options)
- [CLI Usage](#cli-usage)
  - [CLI Options](#cli-options)
- [Docker Usage](#docker-usage)
- [Environment Variables](#environment-variables)
- [Schema](#schema)

## Quick Start

Getting up and running with a standalone is simple and can be done in three ways. Below are all the steps to get up and running.

- Determine the [Ghost URL per the docs](https://ghost.org/docs/api/v3/content/#url). You'll need to set this value as [`GHOST_URL` environment variable](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#environment-variables).
- Create and retrieve your [API key per the docs](https://ghost.org/docs/api/v3/content/#key). You'll need to set this value as [`GHOST_API_KEY` environment variable](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#environment-variables).
- Choose and follow instructions from one of the below three ways to run your server.
  - [Programmatic](#programmatic-usage)
  - [CLI](#cli-usage)
  - [Docker](#docker-usage)

If you're looking to integrate with an existing, custom Apollo server - go to the [custom integration guide](packages/ghost-graphql#getting-started)

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
