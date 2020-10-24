import { GraphQLObjectType } from 'graphql';
import PostType, { PostsConnection as PostsConnectionType } from '../types/Post';
import DataSourceKeyType from '../types/DataSourceKey';
import resource from '../queries/resource';
import resources from '../queries/resources';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    post: resource({ dataSource: DataSourceKeyType.postsAPI, type: PostType, }),
    posts: resources({ dataSource: DataSourceKeyType.postsAPI, type: PostsConnectionType }),
  }),
});

