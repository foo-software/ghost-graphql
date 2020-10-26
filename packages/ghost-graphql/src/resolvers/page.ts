import PageType from '../types/Page';
import DataSourceKeyType from '../types/DataSourceKey';
import createResourceResolver from '../resolverCreators/createResourceResolver';

export default createResourceResolver({
  dataSource: DataSourceKeyType.pagesDataSource,
  resource: 'pages',
  type: PageType,
});
