# `@foo-software/ghost-graphql`

GraphQL data sources, query resolvers, schemas, and types for [Ghost](https://ghost.org/). This project provides the pieces to power an [Apollo Server](https://www.apollographql.com/docs/apollo-server/). [`@foo-software/ghost-graphql-server` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql) imports modules from this project to provide an Apollo Server class with pre-defined options. The exports of this package could be used in a custom implentation instead of using `@foo-software/ghost-graphql-server`. Includes types for TypeScript support (this project is written in TypeScript as a matter of fact).

## Table of Contents

- [Getting Started](#getting-started)
- [Ghost Content API](#ghost-content-api)
  - [Pagination and Filtering](#pagination-and-filtering)
- [Custom Implementation Example](#custom-implementation-example)
- [Environment Variables](#environment-variables)
- [Schema](#schema)

## Getting Started

Below are steps to get started with a custom implementation. If you're looiking to spin up a standalone server, check out the [guide here](packages/ghost-graphql-server#quick-start) instead.

- Determine the [API URL per the docs](https://ghost.org/docs/api/v3/content/#url). You'll need to set this value as [`GHOST_API_URL` environment variable](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#environment-variables).
- Create and retrieve your [API key per the docs](https://ghost.org/docs/api/v3/content/#key). You'll need to set this value as [`GHOST_API_KEY` environment variable](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#environment-variables).
- Use the [custom implementation example](#custom-implementation-example) as a guide and / or simply peek around the code starting with the [exports](src/index.ts). You can import resolvers, data sources, etc.

## Ghost Content API

All queries fetch from [Ghost's Content API](https://ghost.org/docs/api/v3/content).

#### Pagination and Filtering

Resolvers with pagination and filter arguments can be found by inspecting the schema. Arguments mirror the parameters as [documented](https://ghost.org/docs/api/v3/content/#parameters).

Resources with pagination respond with a list of [edges](https://graphql.org/learn/pagination/#pagination-and-edges) **loosely** based on the [GraphQL connection spec provided by Relay](https://relay.dev/graphql/connections.htm). Pagination does not support cursors for the time being due to limitations from Ghost's Content API.

## Custom Implementation Example

In most custom implementations, you'll only need to import resolvers so below is an example how that can be done. For implementations that are more complicated - it is possible to import any part of this package, including data sources, types, etc - just take a look at [what is exported](src/index.ts).

#### Example

Coming soon...

## Environment Variables

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>GHOST_API_KEY</code></td>
    <td>A Ghost Content API key as documented <a href="https://ghost.org/docs/api/v3/content/#key">here</a>.</td>
    <td>string</td>
    <td>yes</td>
    <td>--</td>
  </tr>
  <tr>
    <td><code>GHOST_API_URL</code></td>
    <td>A Ghost admin URL as documented <a href="https://ghost.org/docs/api/v3/content/#url">here</a>. Don't use a trailing slash.</td>
    <td>string</td>
    <td>yes</td>
    <td>--</td>
  </tr>
  <tr>
    <td><code>GHOST_API_VERSION</code></td>
    <td>The version of Ghost API as documented <a href="https://ghost.org/docs/api/v3/content/#path--version">here</a>.</td>
    <td><code>enum { v3 = 'v3' }</code>(only support for v3 at this time)</td>
    <td>no</td>
    <td><code>v3</code></td>
  </tr>
</table>

## Schema

The schema structure can be seen in [schema.graphql of the `@foo-software/ghost-graphql` package](schema.graphql).
