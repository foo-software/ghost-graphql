import { GraphQLString } from 'graphql';
import { API_VERSION } from '../constants';
import { UserInputError } from 'apollo-server';
import camelcaseKeys from 'camelcase-keys';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
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
    id: { type: GraphQLString },
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
