import { PostsConnection } from '../types/Post';
import apiArguments from '../types/apiArguments';
import ApiArguments from '../interfaces/ApiArguments';
import getConnection from '../helpers/getConnection';
import ResolverContextInterface from '../interfaces/DataSources';

export default {
  type: PostsConnection,
  args: apiArguments,
  resolve: async (
    _: any,
    args: ApiArguments,
    { dataSources }: ResolverContextInterface
  ) => {
    const response = await dataSources.postsAPI.browse(args);

    const { meta, posts: nodes } = response || {};

    if (!nodes || !nodes.length) {
      return null;
    }

    return getConnection({ meta, nodes });
  },
};
