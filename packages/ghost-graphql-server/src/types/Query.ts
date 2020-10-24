import { GraphQLObjectType } from 'graphql';
import AuthorType, { AuthorsConnection as AuthorsConnectionType } from '../types/Author';
import PageType, { PagesConnection as PagesConnectionType } from '../types/Page';
import PostType, { PostsConnection as PostsConnectionType } from '../types/Post';
import TagType, { TagsConnection as TagsConnectionType } from '../types/Tag';
import DataSourceKeyType from '../types/DataSourceKey';
import resource from '../queries/resource';
import resourceConnection from '../queries/resourceConnection';
import settings from '../queries/settings';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    author: resource({
      dataSource: DataSourceKeyType.authorsAPI,
      resource: 'authors',
      type: AuthorType,
    }),
    authors: resourceConnection({
      dataSource: DataSourceKeyType.authorsAPI,
      resource: 'authors',
      type: AuthorsConnectionType,
    }),
    page: resource({
      dataSource: DataSourceKeyType.pagesAPI,
      resource: 'pages',
      type: PageType,
    }),
    pages: resourceConnection({
      dataSource: DataSourceKeyType.pagesAPI,
      resource: 'pages',
      type: PagesConnectionType,
    }),
    post: resource({
      dataSource: DataSourceKeyType.postsAPI,
      resource: 'posts',
      type: PostType,
    }),
    posts: resourceConnection({
      dataSource: DataSourceKeyType.postsAPI,
      resource: 'posts',
      type: PostsConnectionType,
    }),
    settings,
    tag: resource({
      dataSource: DataSourceKeyType.tagsAPI,
      resource: 'tags',
      type: TagType,
    }),
    tags: resourceConnection({
      dataSource: DataSourceKeyType.tagsAPI,
      resource: 'tags',
      type: TagsConnectionType,
    }),
  }),
});

