import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import { API_VERSION } from '../constants';
import BrowseArgumentsInterface from '../interfaces/BrowseArguments';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import getConnection from '../helpers/getConnection';
import GhostFormatType from '../types/GhostFormat';
import ResolverContextInterface from '../interfaces/DataSources';

export default ({
  type,
  dataSource,
  resource,
}: {
  dataSource: GhostDataSourceKeyType;
  type: any;
  resource: string;
}) => ({
  type,
  description: `https://ghost.org/docs/api/${API_VERSION}/content/#${resource}`,
  args: {
    // https://ghost.org/docs/content-api/#parameters
    fields: { type: new GraphQLList(GraphQLString) },
    filter: { type: new GraphQLList(GraphQLString) },
    filterExpression: { type: GraphQLString },
    formats: { type: new GraphQLList(GhostFormatType) },
    include: { type: new GraphQLList(GraphQLString) },
    limit: { type: GraphQLInt },
    order: { type: GraphQLString },
    page: { type: GraphQLInt },
  },
  resolve: async (
    _: any,
    args: BrowseArgumentsInterface,
    { dataSources }: ResolverContextInterface
  ) => {
    const response = await dataSources[dataSource].browse(args);

    const { meta, [resource]: nodes } = response || {};

    if (!nodes || !nodes.length) {
      return null;
    }

    return getConnection({ meta, nodes });
  },
});
