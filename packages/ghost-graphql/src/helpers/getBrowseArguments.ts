import BrowseArguments from '../interfaces/BrowseArguments';

export default (browseArguments: BrowseArguments) => {
  return {
    ...browseArguments,
    limit: browseArguments.limit || 'all',
  };
};
