import { RESTDataSource } from 'apollo-datasource-rest';
import { API_URL } from '../constants';
import ApiArguments from '../interfaces/ApiArguments';
import getApiArguments from '../helpers/getApiArguments';

export default class PostsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/posts`;
  }

  browse(apiArguments: ApiArguments) {
    return this.get(
      `${this.baseURL}`,
      {
        ...getApiArguments(apiArguments),
      },
    );
  }
}
