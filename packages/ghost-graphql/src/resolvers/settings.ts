import { API_VERSION } from '../constants';
import ResolverContextInterface from '../interfaces/DataSources';
import SettingsType from '../types/Settings';

export default {
  type: SettingsType,
  description: `https://ghost.org/docs/api/${API_VERSION}/content/#settings`,
  resolve: async (
    _: any,
    __: any,
    { dataSources }: ResolverContextInterface
  ) => {
    const response = await dataSources.settingsDataSource.browse();
    const { settings } = response;

    if (!settings) {
      return null;
    }

    return settings;
  },
};
