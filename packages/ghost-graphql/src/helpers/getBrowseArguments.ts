import BrowseArguments from '../interfaces/BrowseArguments';

export default (browseArguments: BrowseArguments) => {
  const { filterExpression, ...partialBrowseArguments } = browseArguments;

  return {
    ...partialBrowseArguments,
    ...(filterExpression && {
      filter: filterExpression,
    }),
    limit: browseArguments.limit || 'all',
  };
};
