# GraphQL for Ghost

A monorepo providing an [Apollo Server](https://www.apollographql.com/docs/apollo-server/) for [Ghost](https://ghost.org/) and the pieces independently.

Examples of available endpoints and corresponding queries documented [here](docs/endpoints-to-query.md). These examples may not be up to date and offer complete details, so viewing the [schema](#schema) directly would be recommended.

## Packages

- [`@foo-software/ghost-graphql`](packages/ghost-graphql): Apollo GraphQL data sources, query resolvers, schemas, and types for Ghost.
- [`@foo-software/ghost-graphql-server`](packages/ghost-graphql-server): An Apollo GraphQL server for Ghost supporting programmatic or CLI usage.

## Schema

The schema structure can be seen in [schema.graphql of the `@foo-software/ghost-graphql` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql/schema.graphql).
