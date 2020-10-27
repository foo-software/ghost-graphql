import GhostTagType from '../types/GhostTag';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: GhostDataSourceKeyType.tagsDataSource,
  resource: 'tags',
  type: GhostTagType,
});
