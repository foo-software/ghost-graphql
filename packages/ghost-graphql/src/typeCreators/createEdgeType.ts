import {
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLString,
} from 'graphql';

export default ({
  name,
  nodeType,
}: {
  name: string;
  nodeType: GraphQLObjectType | GraphQLInterfaceType;
}) =>
  new GraphQLObjectType({
    name: `${name}Edge`,
    fields: () => ({
      cursor: { type: GraphQLString },
      node: {
        type: nodeType,
      },
    }),
  });
