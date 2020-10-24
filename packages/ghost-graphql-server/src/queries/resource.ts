import { UserInputError } from 'apollo-server';
import DataSourceKeyType from '../types/DataSourceKey';
import readArgumentsTypes from '../types/readArguments';
import ReadArgumentsInterface from '../interfaces/ReadArguments';
import ResolverContextInterface from '../interfaces/DataSources';

export default ({
  type,
  dataSource,
}: {
  type: any;
  dataSource: DataSourceKeyType;
}) => ({
  type,
  args: readArgumentsTypes,
  resolve: async (
    _: any,
    args: ReadArgumentsInterface,
    { dataSources }: ResolverContextInterface
  ) => {
    if (!args.id && !args.slug) {
      return new UserInputError('either an id or slug needs to be provided');
    }

    const response = await dataSources[dataSource].read(args);

    const { posts } = response || {};

    if (!posts || !posts.length) {
      return null;
    }

    return posts[0];
  },
});
