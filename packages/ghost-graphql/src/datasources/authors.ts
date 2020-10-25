import { API_URL } from '../constants';
import ResourceDataSource from './resource';

export default class AuthorsDataSource extends ResourceDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/authors`;
  }
}
