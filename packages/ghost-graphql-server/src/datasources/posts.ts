import { RESTDataSource } from 'apollo-datasource-rest';
import { API_URL } from '../constants';
import BrowseArgumentsInterface from '../interfaces/BrowseArguments';
import getBrowseArguments from '../helpers/getBrowseArguments';
import ReadArgumentsInterface from '../interfaces/ReadArguments';

export default class PostsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/posts`;
  }

  browse(browseArguments: BrowseArgumentsInterface) {
    return this.get(
      `${this.baseURL}`,
      {
        ...getBrowseArguments(browseArguments),
      },
    );
  }

  read({ id, key, slug }: ReadArgumentsInterface) {
    return this.get(`${this.baseURL}/${id || `slug/${slug}`}`, { key });
  }
}
