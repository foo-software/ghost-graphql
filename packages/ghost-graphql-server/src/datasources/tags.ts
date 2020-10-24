import { API_URL } from '../constants';
import ResourceApi from './resource';

export default class TagsAPI extends ResourceApi {
  constructor() {
    super();
    this.baseURL = `${API_URL}/tags`;
  }
}
