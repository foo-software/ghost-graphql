import { GraphQLObjectType } from 'graphql';
import AuthorType, {
  AuthorsConnection as AuthorsConnectionType,
} from '../types/Author';
import PageType, {
  PagesConnection as PagesConnectionType,
} from '../types/Page';
import PostType, {
  PostsConnection as PostsConnectionType,
} from '../types/Post';
import TagType, { TagsConnection as TagsConnectionType } from '../types/Tag';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver ';
import settings from '../resolvers/settings';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    author: createResourceResolver({
      dataSource: DataSourceKeyType.authorsDataSource,
      resource: 'authors',
      type: AuthorType,
    }),
    authors: createResourceConnectionResolver({
      dataSource: DataSourceKeyType.authorsDataSource,
      resource: 'authors',
      type: AuthorsConnectionType,
    }),
    page: createResourceResolver({
      dataSource: DataSourceKeyType.pagesDataSource,
      resource: 'pages',
      type: PageType,
    }),
    pages: createResourceConnectionResolver({
      dataSource: DataSourceKeyType.pagesDataSource,
      resource: 'pages',
      type: PagesConnectionType,
    }),
    post: createResourceResolver({
      dataSource: DataSourceKeyType.postsDataSource,
      resource: 'posts',
      type: PostType,
    }),
    posts: createResourceConnectionResolver({
      dataSource: DataSourceKeyType.postsDataSource,
      resource: 'posts',
      type: PostsConnectionType,
    }),
    settings,
    tag: createResourceResolver({
      dataSource: DataSourceKeyType.tagsDataSource,
      resource: 'tags',
      type: TagType,
    }),
    tags: createResourceConnectionResolver({
      dataSource: DataSourceKeyType.tagsDataSource,
      resource: 'tags',
      type: TagsConnectionType,
    }),
  }),
});
