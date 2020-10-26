import TagType from '../types/Tag';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: DataSourceKeyType.tagsDataSource,
  resource: 'tags',
  type: TagType,
});
