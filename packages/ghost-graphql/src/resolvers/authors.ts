import { GhostAuthorsConnection as GhostAuthorsConnectionType } from '../types/GhostAuthor';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver';

export default createResourceConnectionResolver({
  dataSource: GhostDataSourceKeyType.authorsDataSource,
  resource: 'authors',
  type: GhostAuthorsConnectionType,
});
