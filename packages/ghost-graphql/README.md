# `@foo-software/ghost-graphql`

GraphQL data sources, query resolvers, schemas, and types for [Ghost](https://ghost.org/). This project provides the pieces to power an [Apollo Server](https://www.apollographql.com/docs/apollo-server/). [`@foo-software/ghost-graphql-server` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql-server) imports modules from this project to provide an Apollo Server class with pre-defined options. You should use that project for a simple, quick solution if you don't need much customization. The exports of this package could be used in a custom implentation instead of using `@foo-software/ghost-graphql-server`. Includes types for TypeScript support (this project is written in TypeScript as a matter of fact).

## Table of Contents

- [Getting Started](#getting-started)
- [TypeScript Dependencies](#typescript-dependencies)
- [Ghost Content API](#ghost-content-api)
  - [Pagination and Filtering](#pagination-and-filtering)
  - [Filter Expressions](#filter-expressions)
- [Custom Implementation Example](#custom-implementation-example)
- [Environment Variables](#environment-variables)
- [Schema](#schema)

## Getting Started

Below are steps to get started with a custom implementation. If you're looking to spin up a standalone server, check out the [guide here](packages/ghost-graphql-server#quick-start) instead.

- Determine the [API URL per the docs](https://ghost.org/docs/content-api/#url). You'll need to set this value as [`GHOST_URL` environment variable](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#environment-variables).
- Create and retrieve your [API key per the docs](https://ghost.org/docs/content-api/#key). You'll need to set this value as [`GHOST_API_KEY` environment variable](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql#environment-variables).
- Use the [custom implementation example](#custom-implementation-example) as a guide and / or simply peek around the code starting with the [exports](src/index.ts). You can import resolvers, data sources, etc.

## TypeScript Dependencies

We use `tsc` to generate types and you may need to match our TypeScript version if you have build errors. Check our [`package.json`](./package.json) to find our TypeScript version.

## Ghost Content API

All queries fetch from [Ghost's Content API](https://ghost.org/docs/content-api).

#### Pagination and Filtering

Resolvers with pagination and filter arguments can be found by inspecting the schema. Arguments mirror the parameters as [documented](https://ghost.org/docs/content-api/#parameters).

Resources with pagination respond with a list of [edges](https://graphql.org/learn/pagination/#pagination-and-edges) **loosely** based on the [GraphQL connection spec provided by Relay](https://relay.dev/graphql/connections.htm). Pagination does not support cursors for the time being due to limitations from Ghost's Content API.

#### Filter Expressions

Filtering has evolved a bit in this project. We initially provided a `filter` argument which is an array of string type (`[String]`), however this led to unintuitive behavior as described in [issue #8](https://github.com/foo-software/ghost-graphql/issues/8). Typing it in this way was naive in that it adds an `or` operator with multiple filters like `filter: ["feature:true", "tag:some-tag"]`.

In order to leverage the full power of Ghost's [filter expression syntax](https://ghost.org/docs/content-api/#filtering), it's best to now use the `filterExpression` argument (`String` type) instead of the original `filter` argument.

For example, if I wanted to fetch all feature posts **and** exclude tags with `some-tag`, I would use `filterExpression` like so:

```
filterExpression: "featured:true+tag:-some-tag"
```

Note the use of the and operator (`+`) and negation operator (`-`).

## Custom Implementation Example

In most custom implementations, you'll only need to import resolvers. For implementations that are more complicated - it is possible to import any part of this package, including data sources, types, etc - just take a look at [what is exported](src/index.ts).

Before following the example below, make sure you've setup environment variables per the [getting started guide](#getting-started).

#### Example

Example assuming you've setup a server similar to the example found in [Apollo Server docs](https://www.apollographql.com/docs/apollo-server/data/data-sources/#accessing-data-sources-from-resolvers).

```javascript
import {
  authorResolver as author,
  AuthorsDataSource,
  authorsResolver as authors,
  pageResolver as page,
  pagesResolver as pages,
  PagesDataSource,
  postResolver as post,
  postsResolver as posts,
  PostsDataSource,
  settingsResolver as settings,
  SettingsDataSource,
  tagResolver as tag,
  TagsDataSource,
  tagsResolver as tags,
} from '@foo-software/ghost-graphql';

const server = new ApolloServer({
  resolvers: {
    Query: {
      author,
      authors,
      page,
      pages,
      post,
      posts,
      settings,
      tag,
      tags,
    },
  },
  dataSources: () => {
    return {
      authorsDataSource: new AuthorsDataSource(),
      pagesDataSource: new PagesDataSource(),
      postsDataSource: new PostsDataSource(),
      settingsDataSource: new SettingsDataSource(),
      tagsDataSource: new TagsDataSource(),
    };
  },
  context: () => {
    return {
      token: 'foo',
    };
  },
});
```

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
    <td>A Ghost Content API key as documented <a href="https://ghost.org/docs/content-api/#key">here</a>.</td>
    <td>string</td>
    <td>yes</td>
    <td>--</td>
  </tr>
  <tr>
    <td><code>GHOST_API_VERSION</code></td>
    <td>The version of Ghost API as documented <a href="https://ghost.org/docs/content-api/#path--version">here</a>.</td>
    <td><code>enum { v3 = 'v3' }</code>(only support for v3 at this time)</td>
    <td>no</td>
    <td><code>v3</code></td>
  </tr>
  <tr>
    <td><code>GHOST_URL</code></td>
    <td>A Ghost admin URL as documented <a href="https://ghost.org/docs/content-api/#url">here</a>. Don't use a trailing slash.</td>
    <td>string</td>
    <td>yes</td>
    <td>--</td>
  </tr>
</table>

## Schema

The schema structure can be seen in [schema.graphql of the `@foo-software/ghost-graphql` package](schema.graphql).
