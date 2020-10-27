import { GraphQLInt, GraphQLObjectType } from 'graphql';

const GhostPagination = new GraphQLObjectType({
  name: 'GhostPagination',
  fields: () => ({
    limit: { type: GraphQLInt },
    next: { type: GraphQLInt },
    page: { type: GraphQLInt },
    pages: { type: GraphQLInt },
    prev: { type: GraphQLInt },
    total: { type: GraphQLInt },
  }),
});

export default new GraphQLObjectType({
  name: 'GhostMeta',

  fields: () => ({
    pagination: {
      type: GhostPagination,
      description: 'https://ghost.org/docs/api/v3/content/#pagination',
    },
  }),
});
