import { GraphQLInt, GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'GhostPostsCount',
  fields: () => ({
    posts: { type: GraphQLInt },
  }),
});
