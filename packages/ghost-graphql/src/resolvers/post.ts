import PostType from '../types/Post';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: DataSourceKeyType.postsDataSource,
  resource: 'posts',
  type: PostType,
});
