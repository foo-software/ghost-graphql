import { GraphQLInt, GraphQLObjectType } from 'graphql';

const Pagination = new GraphQLObjectType({
  name: 'Pagination',
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
  name: 'Meta',

  fields: () => ({
    pagination: {
      type: Pagination,
      description: 'https://ghost.org/docs/api/v3/content/#pagination',
    },
  }),
});
