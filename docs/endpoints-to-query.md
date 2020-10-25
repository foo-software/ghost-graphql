# Endpoints to Queries

Below are examples of available endpoints and corresponding queries. These examples may not be up to date and offer complete details, so viewing the [schema](https://github.com/foo-software/ghost-graphql/tree/master/packages/ghost-graphql/schema.graphql) directly would be recommended.

## [Posts](https://ghost.org/docs/api/v3/content/#posts)

#### Browse Posts

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=$GHOST_API_KEY" | json_pp
```

```gql
posts(limit: 2, page: 3) {
  edges {
    node {
      id
      featureImage
      metaDescription
      sendEmailWhenPublished
    }
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  meta {
    pagination{
      limit
      next
      page
      pages
      prev
      total
    }
  }
}
```

#### Read a Post by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/posts/5b7ada404f87d200b5b1f9c8/?key=$GHOST_API_KEY" | json_pp
```

```gql
post(id: "5b7ada404f87d200b5b1f9c8") {
  id
  featureImage
  metaDescription
  sendEmailWhenPublished
  slug
}
```

#### Read a Post by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/posts/slug/welcome/?key=$GHOST_API_KEY" | json_pp
```

```gql
post(slug: "welcome") {
  id
  featureImage
  metaDescription
  sendEmailWhenPublished
  slug
}
```

## [Authors](https://ghost.org/docs/api/v3/content/#authors)

#### Browse Authors

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/authors/?key=$GHOST_API_KEY" | json_pp
```

```gql
authors(limit: 2, page: 1) {
  edges {
    node {
      id
      profileImage
    }
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  meta {
    pagination{
      limit
      next
      page
      pages
      prev
      total
    }
  }
}
```

#### Read an Author by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/authors/5979a779df093500228e958e/?key=$GHOST_API_KEY" | json_pp
```

```gql
post(id: "5979a779df093500228e9590") {
  id
  featureImage
  metaDescription
  sendEmailWhenPublished
  slug
}
```

#### Read an Author by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/authors/slug/lewis/?key=$GHOST_API_KEY" | json_pp
```

```gql
author(slug: "cameron") {
  id
  featureImage
  metaDescription
  sendEmailWhenPublished
  slug
}
```

## [Tags](https://ghost.org/docs/api/v3/content/#tags)

#### Browse Tags

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/tags/?key=$GHOST_API_KEY" | json_pp
```

```gql
tags(limit: 2, page: 1) {
  edges {
    node {
      id
      description
    }
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  meta {
    pagination{
      limit
      next
      page
      pages
      prev
      total
    }
  }
}
```

#### Read a Tag by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/tags/5979a779df093500228e958b/?key=$GHOST_API_KEY" | json_pp
```

```gql
tag(id: "5979a779df093500228e958a") {
  id
  description
  slug
}
```

#### Read a Tag by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/tags/slug/speeches/?key=$GHOST_API_KEY" | json_pp
```

```gql
tag(slug: "fables") {
  id
  featureImage
  metaDescription
  sendEmailWhenPublished
  slug
}
```

## [Pages](https://ghost.org/docs/api/v3/content/#pages)

#### Browse Pages

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/pages/?key=$GHOST_API_KEY" | json_pp
```

```gql
pages(limit: 2, page: 1) {
  edges {
    node {
      id
      createdAt
    }
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  meta {
    pagination{
      limit
      next
      page
      pages
      prev
      total
    }
  }
}
```

#### Read a Page by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/pages/5979a4d6df093500228e9582/?key=$GHOST_API_KEY" | json_pp
```

```gql
page(id: "5979a4d6df093500228e9582") {
  id
  description
  slug
}
```

#### Read a Page by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/pages/slug/about/?key=$GHOST_API_KEY" | json_pp
```

```gql
page(slug: "about") {
  id
  description
  slug
}
```

## [Settings](https://ghost.org/docs/api/v3/content/#settings)

#### Browse Settings

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/settings/?key=$GHOST_API_KEY" | json_pp
```

```gql
settings {
  title
  description
}
```
