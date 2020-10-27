import GhostAuthorType from '../types/GhostAuthor';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: GhostDataSourceKeyType.authorsDataSource,
  resource: 'authors',
  type: GhostAuthorType,
});
