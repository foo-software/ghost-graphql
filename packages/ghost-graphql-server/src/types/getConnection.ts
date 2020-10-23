import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInterfaceType,
} from 'graphql';
import getEdge from './getEdge';
import Meta from './Meta';
import PageInfo from './PageInfo';

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
        type: new GraphQLList(getEdge({ name, nodeType })),
      },
      meta: { type: Meta },
      pageInfo: { type: new GraphQLNonNull(PageInfo) },
    }),
  });
