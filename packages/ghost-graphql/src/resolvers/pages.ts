import { PagesConnection as PagesConnectionType } from '../types/Page';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceConnectionResolver from '../resolverCreators/createResourceConnectionResolver ';

export default createResourceConnectionResolver({
  dataSource: DataSourceKeyType.pagesDataSource,
  resource: 'pages',
  type: PagesConnectionType,
});
