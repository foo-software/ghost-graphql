import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import { API_VERSION } from '../constants';
import BrowseArgumentsInterface from '../interfaces/BrowseArguments';
import DataSourceKeyType from '../types/DataSourceKey';
import FormatType from '../types/Format';
import getConnection from '../helpers/getConnection';
import ResolverContextInterface from '../interfaces/DataSources';

export default ({
  type,
  dataSource,
  resource,
}: {
  dataSource: DataSourceKeyType;
  type: any;
  resource: string;
}) => ({
  type,
  description: `https://ghost.org/docs/api/${API_VERSION}/content/#${resource}`,
  args: {
    // https://ghost.org/docs/api/v3/content/#parameters
    fields: { type: new GraphQLList(GraphQLString) },
    filter: { type: new GraphQLList(GraphQLString) },
    formats: { type: new GraphQLList(FormatType) },
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
