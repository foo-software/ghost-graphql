import { API_URL } from '../constants';
import ResourceApi from './resource';

export default class PostsAPI extends ResourceApi {
  constructor() {
    super();
    this.baseURL = `${API_URL}/posts`;
  }
}
