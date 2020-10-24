import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Navigation',
  fields: () => ({
    label: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});
