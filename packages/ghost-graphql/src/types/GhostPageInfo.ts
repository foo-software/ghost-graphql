import { GraphQLNonNull, GraphQLBoolean, GraphQLObjectType } from 'graphql';

// https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
export default new GraphQLObjectType({
  name: 'GhostPageInfo',
  fields: () => ({
    // unfortunately we can't follow the spec strictly based on the data we get back
    // endCursor: { type: new GraphQLNonNull(GraphQLString) },
    // startCursor: { type: new GraphQLNonNull(GraphQLString) },
    hasNextPage: { type: new GraphQLNonNull(GraphQLBoolean) },
    hasPreviousPage: { type: new GraphQLNonNull(GraphQLBoolean) },
  }),
});
