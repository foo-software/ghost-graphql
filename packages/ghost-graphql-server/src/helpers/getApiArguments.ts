import ApiArguments from '../interfaces/ApiArguments';

export default (apiArguments: ApiArguments) => {
  return {
    ...apiArguments,
    limit: apiArguments.limit || 'all',
  };
};
