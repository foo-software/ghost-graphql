import { GraphQLObjectType } from 'graphql';
import posts from '../queries/posts';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    posts,
  }),
});

