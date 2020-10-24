import ResolverContextInterface from '../interfaces/DataSources';
import SettingsType from '../types/Settings';

export default {
  type: SettingsType,
  resolve: async (
    _: any,
    __: any,
    { dataSources }: ResolverContextInterface
  ) => {
    const response = await dataSources.settingsAPI.browse();
    const { settings } = response;

    if (!settings) {
      return null;
    }

    return settings;
  },
};
