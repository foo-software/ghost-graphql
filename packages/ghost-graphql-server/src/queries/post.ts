import { UserInputError } from 'apollo-server';
import Post from '../types/Post';
import readArgumentsTypes from '../types/readArguments';
import ReadArgumentsInterface from '../interfaces/ReadArguments';
import ResolverContextInterface from '../interfaces/DataSources';

export default {
  type: Post,
  args: readArgumentsTypes,
  resolve: async (
    _: any,
    args: ReadArgumentsInterface,
    { dataSources }: ResolverContextInterface
  ) => {
    if (!args.id && !args.slug) {
      return new UserInputError('either an id or slug needs to be provided');
    }

    const response = await dataSources.postsAPI.read(args);

    const { posts } = response || {};

    if (!posts || !posts.length) {
      return null;
    }

    return posts[0];
  },
};
