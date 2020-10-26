import { TagsConnection as TagsConnectionType } from '../types/Tag';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver ';

export default createResourceConnectionResolver({
  dataSource: DataSourceKeyType.tagsDataSource,
  resource: 'tags',
  type: TagsConnectionType,
});
