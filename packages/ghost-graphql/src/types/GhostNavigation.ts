import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'GhostNavigation',
  fields: () => ({
    label: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});
