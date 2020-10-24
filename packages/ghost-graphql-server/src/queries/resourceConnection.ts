import DataSourceKeyType from '../types/DataSourceKey';
import browseArgumentsTypes from '../types/browseArguments';
import BrowseArgumentsInterface from '../interfaces/BrowseArguments';
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
  args: browseArgumentsTypes,
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
