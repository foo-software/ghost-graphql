# Endpoints to Queries

Below are examples of available endpoints and corresponding queries. Note `key` was taken from [Ghost documentation](https://ghost.org/docs/api/v3/content) and could be out of date.

## [Posts](https://ghost.org/docs/api/v3/content/#posts)

#### Browse Posts

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062" | json_pp
```

#### Read a Post by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/posts/5b7ada404f87d200b5b1f9c8/?key=22444f78447824223cefc48062" | json_pp
```

#### Read a Post by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/posts/slug/welcome/?key=22444f78447824223cefc48062" | json_pp
```

## [Authors](https://ghost.org/docs/api/v3/content/#authors)

#### Browse Authors

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/authors/?key=22444f78447824223cefc48062" | json_pp
```

#### Read an Author by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/authors/5979a779df093500228e958e/?key=22444f78447824223cefc48062" | json_pp
```

#### Read an Author by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/authors/slug/lewis/?key=22444f78447824223cefc48062" | json_pp
```

## [Tags](https://ghost.org/docs/api/v3/content/#tags)

#### Browse Tags

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/tags/?key=22444f78447824223cefc48062" | json_pp
```

#### Read a Tag by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/tags/5979a779df093500228e958b/?key=22444f78447824223cefc48062" | json_pp
```

#### Read a Tag by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/tags/slug/speeches/?key=22444f78447824223cefc48062" | json_pp
```

## [Pages](https://ghost.org/docs/api/v3/content/#pages)

#### Browse Pages

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/pages/?key=22444f78447824223cefc48062" | json_pp
```

#### Read a Page by ID

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/pages/5979a4d6df093500228e9582/?key=22444f78447824223cefc48062" | json_pp
```

#### Read a Page by Slug

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/pages/slug/about/?key=22444f78447824223cefc48062" | json_pp
```

## [Settings](https://ghost.org/docs/api/v3/content/#settings)

#### Browse Settings

```bash
curl "https://demo.ghost.io/ghost/api/v3/content/settings/?key=22444f78447824223cefc48062" | json_pp
```
