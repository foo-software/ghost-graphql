import { API_URL } from '../constants';
import ResourceDataSource from './resource';

export default class TagsDataSource extends ResourceDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/tags`;
  }
}
