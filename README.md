# GraphQL for Ghost

A monorepo providing an [Apollo Server](https://www.apollographql.com/docs/apollo-server/) for [Ghost](https://ghost.org/). Not only does this project provide a standalone server, but also provides each piece independently to support extending your own Apollo Server implementation.

Examples of available endpoints and corresponding queries documented [here](docs/endpoints-to-query.md). These examples may not be up to date and offer complete details, so viewing the [schema](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql/schema.graphql) directly is encouraged.

This project is a monorepo for flexibility of usage supporting standalone servers or custom implementations. For example, one can import resolvers independently from the [`@foo-software/ghost-graphql`](packages/ghost-graphql) package or instantiate a standalone server from [`@foo-software/ghost-graphql-server`](packages/ghost-graphql-server).

## Quick Start

For quick start instructions to spin up a standalone server, check out the [guide](packages/ghost-graphql-server#quick-start). Otherwise, if you're looking to integrate with an existing, custom Apollo server - go to the [custom integration guide](packages/ghost-graphql#getting-started).

## Packages

- [`@foo-software/ghost-graphql`](packages/ghost-graphql): Apollo GraphQL data sources, query resolvers, schemas, and types for Ghost.
- [`@foo-software/ghost-graphql-server`](packages/ghost-graphql-server): An Apollo GraphQL server for Ghost supporting programmatic or CLI usage.

## Docker

This project also provides a pre-configured Docker container as a standalone server. See [`@foo-software/ghost-graphql-server`](packages/ghost-graphql-server#docker-usage) for more.

## Schema

The schema structure can be seen in [schema.graphql of the `@foo-software/ghost-graphql` package](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql/schema.graphql).

> <img src="https://lighthouse-check.s3.amazonaws.com/images/logo-simple-blue-light-512.png" width="100" height="100" align="left" /> This package was brought to you by [Foo - a website quality monitoring tool](https://www.foo.software). Automatically test and monitor website performance, SEO and accessibility with Lighthouse. Analyze historical records of Lighthouse tests with automated monitoring. Report with confidence about SEO and performance improvements to stay on top of changes when they happen!
