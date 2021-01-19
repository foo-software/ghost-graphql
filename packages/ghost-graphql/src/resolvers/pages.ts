import { GhostPagesConnection as GhostPagesConnectionType } from '../types/GhostPage';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver';

export default createResourceConnectionResolver({
  dataSource: GhostDataSourceKeyType.pagesDataSource,
  resource: 'pages',
  type: GhostPagesConnectionType,
});
