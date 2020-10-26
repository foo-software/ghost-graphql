import { PostsConnection as PostsConnectionType } from '../types/Post';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver ';

export default createResourceConnectionResolver({
  dataSource: DataSourceKeyType.postsDataSource,
  resource: 'posts',
  type: PostsConnectionType,
});
