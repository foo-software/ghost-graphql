# `@foo-software/ghost-graphql`

GraphQL data sources, query resolvers, schemas, and types for Ghost. This project provides the pieces to power an [Apollo Server](https://www.apollographql.com/docs/apollo-server/). [`@foo-software/ghost-graphql-server` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql) imports modules from this project to provide an Apollo Server class with pre-defined options. The exports of this package could be used in a custom implentation instead of using `@foo-software/ghost-graphql-server`. Includes types for TypeScript support (this project is written in TypeScript as a matter of fact).

## Table of Contents

- [Environment Variables](#environment-variables)
- [Schema Structure](#schema-structure)

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
    <td>Yes</td>
    <td>--</td>
  </tr>
  <tr>
    <td><code>GHOST_API_VERSION</code></td>
    <td>The version of Ghost API as documented <a href="https://ghost.org/docs/api/v3/content/#path--version">here</a>.</td>
    <td><code>enum { v3 = 'v3' }</code>(only support for v3 at this time)</td>
    <td>No</td>
    <td><code>v3</code></td>
  </tr>
  <tr>
    <td><code>GHOST_API_URL</code></td>
    <td>A Ghost admin URL as documented <a href="https://ghost.org/docs/api/v3/content/#url">here</a>. Don't use a trailing slash.</td>
    <td>string</td>
    <td>Yes</td>
    <td>--</td>
  </tr>
</table>

## Schema Structure

The schema structure can be seen in [schema.graphql of the `@foo-software/ghost-graphql` package](schema.graphql).
