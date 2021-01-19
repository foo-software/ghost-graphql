import { GhostTagsConnection as GhostTagsConnectionType } from '../types/GhostTag';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver';

export default createResourceConnectionResolver({
  dataSource: GhostDataSourceKeyType.tagsDataSource,
  resource: 'tags',
  type: GhostTagsConnectionType,
});
