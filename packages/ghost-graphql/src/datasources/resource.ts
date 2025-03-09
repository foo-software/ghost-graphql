import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import {
  API_KEY,
  API_URL,
  SHOULD_LOG_API_URL,
  SHOULD_LOG_HTTP_REQUESTS,
} from '../constants';
import BrowseArgumentsInterface from '../interfaces/BrowseArguments';
import ReadArgumentsInterface from '../interfaces/ReadArguments';
import getBrowseArguments from '../helpers/getBrowseArguments';

export default class ResourceDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}`;
    if (SHOULD_LOG_API_URL) {
      console.log('API_URL', API_URL);
    }
  }

  willSendRequest(request: RequestOptions) {
    if (SHOULD_LOG_HTTP_REQUESTS) {
      console.log('Request', request);
      if (super.willSendRequest) {
        super.willSendRequest(request);
      }
    }
  }

  browse(browseArguments: BrowseArgumentsInterface) {
    return this.get(`${this.baseURL}`, {
      ...getBrowseArguments(browseArguments),
      key: API_KEY,
    });
  }

  read({ id, slug, ...args }: ReadArgumentsInterface) {
    return this.get(`${this.baseURL}/${id || `slug/${slug}`}`, {
      key: API_KEY,
      ...args,
    });
  }
}
