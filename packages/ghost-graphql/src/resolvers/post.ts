import GhostPostType from '../types/GhostPost';
import GhostDataSourceKeyType from '../types/GhostDataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: GhostDataSourceKeyType.postsDataSource,
  resource: 'posts',
  type: GhostPostType,
});
