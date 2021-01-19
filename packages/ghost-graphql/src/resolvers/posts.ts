import { GhostPostsConnection as GhostPostsConnectionType } from '../types/GhostPost';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver';

export default createResourceConnectionResolver({
  dataSource: GhostDataSourceKeyType.postsDataSource,
  resource: 'posts',
  type: GhostPostsConnectionType,
});
