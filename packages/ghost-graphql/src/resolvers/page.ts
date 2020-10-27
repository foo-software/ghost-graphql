import GhostPageType from '../types/GhostPage';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: GhostDataSourceKeyType.pagesDataSource,
  resource: 'pages',
  type: GhostPageType,
});
