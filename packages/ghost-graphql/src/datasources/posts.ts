import { API_URL } from '../constants';
import ResourceDataSource from './resource';

export default class PostsDataSource extends ResourceDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/posts`;
  }
}
