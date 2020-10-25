import { RESTDataSource } from 'apollo-datasource-rest';
import { API_KEY, API_URL } from '../constants';
import BrowseArgumentsInterface from '../interfaces/BrowseArguments';
import ReadArgumentsInterface from '../interfaces/ReadArguments';
import getBrowseArguments from '../helpers/getBrowseArguments';

export default class ResourceDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}`;
  }

  browse(browseArguments: BrowseArgumentsInterface) {
    return this.get(`${this.baseURL}`, {
      ...getBrowseArguments(browseArguments),
      key: API_KEY,
    });
  }

  read({ id, slug }: ReadArgumentsInterface) {
    return this.get(`${this.baseURL}/${id || `slug/${slug}`}`, {
      key: API_KEY,
    });
  }
}
