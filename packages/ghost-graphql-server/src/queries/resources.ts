import DataSourceKeyType from '../types/DataSourceKey';
import browseArgumentsTypes from '../types/browseArguments';
import BrowseArgumentsInterface from '../interfaces/BrowseArguments';
import getConnection from '../helpers/getConnection';
import ResolverContextInterface from '../interfaces/DataSources';

export default ({
  type,
  dataSource,
}: {
  type: any;
  dataSource: DataSourceKeyType;
}) => ({
  type,
  args: browseArgumentsTypes,
  resolve: async (
    _: any,
    args: BrowseArgumentsInterface,
    { dataSources }: ResolverContextInterface
  ) => {
    const response = await dataSources[dataSource].browse(args);

    const { meta, posts: nodes } = response || {};

    if (!nodes || !nodes.length) {
      return null;
    }

    return getConnection({ meta, nodes });
  },
});
