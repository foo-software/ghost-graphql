import { AuthorsConnection as AuthorsConnectionType } from '../types/Author';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver ';

export default createResourceConnectionResolver({
  dataSource: DataSourceKeyType.authorsDataSource,
  resource: 'authors',
  type: AuthorsConnectionType,
});
