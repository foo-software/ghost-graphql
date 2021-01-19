import { GraphQLList, GraphQLString } from 'graphql';
import { API_VERSION } from '../constants';
import { UserInputError } from 'apollo-server';
import camelcaseKeys from 'camelcase-keys';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import GhostFormatType from '../types/GhostFormat';
import ReadArgumentsInterface from '../interfaces/ReadArguments';
import ResolverContextInterface from '../interfaces/DataSources';

export default ({
  isSingular = false,
  type,
  dataSource,
  resource,
}: {
  dataSource: GhostDataSourceKeyType;
  isSingular?: boolean;
  type: any;
  resource: string;
}) => ({
  type,
  description: `https://ghost.org/docs/api/${API_VERSION}/content/#${resource}`,
  args: {
    fields: { type: new GraphQLList(GraphQLString) },
    id: { type: GraphQLString },
    filter: { type: new GraphQLList(GraphQLString) },
    formats: { type: new GraphQLList(GhostFormatType) },
    include: { type: new GraphQLList(GraphQLString) },
    slug: { type: GraphQLString },
  },
  resolve: async (
    _: any,
    args: ReadArgumentsInterface,
    { dataSources }: ResolverContextInterface
  ) => {
    if (!args.id && !args.slug) {
      return new UserInputError('either an id or slug needs to be provided');
    }

    const response = await dataSources[dataSource].read(args);
    const result = response[resource];

    if (!result) {
      return null;
    }

    if (isSingular) {
      return camelcaseKeys(result, { deep: true });
    }

    if (!result.length) {
      return null;
    }

    return camelcaseKeys(result[0], { deep: true });
  },
});
