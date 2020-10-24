import { API_URL } from '../constants';
import ResourceApi from './resource';

export default class AuthorsAPI extends ResourceApi {
  constructor() {
    super();
    this.baseURL = `${API_URL}/authors`;
  }
}
