import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInterfaceType,
} from 'graphql';
import createEdgeType from './createEdgeType';
import GhostMeta from '../types/GhostMeta';
import GhostPageInfo from '../types/GhostPageInfo';

// inspired by https://relay.dev/graphql/connections.htm
// and https://graphql.org/learn/pagination/
export default ({
  name,
  nodeType,
}: {
  name: string;
  nodeType: GraphQLObjectType | GraphQLInterfaceType;
}) =>
  new GraphQLObjectType({
    name: `${name}Connection`,

    fields: () => ({
      edges: {
        type: new GraphQLList(createEdgeType({ name, nodeType })),
      },
      meta: { type: GhostMeta },
      pageInfo: { type: new GraphQLNonNull(GhostPageInfo) },
    }),
  });
