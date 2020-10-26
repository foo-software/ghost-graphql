import AuthorType from '../types/Author';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: DataSourceKeyType.authorsDataSource,
  resource: 'authors',
  type: AuthorType,
});
