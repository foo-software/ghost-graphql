import { GraphQLObjectType } from 'graphql';
import post from '../queries/post';
import posts from '../queries/posts';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    post,
    posts,
  }),
});

