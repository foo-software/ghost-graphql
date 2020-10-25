import { RESTDataSource } from 'apollo-datasource-rest';
import { API_KEY, API_URL } from '../constants';

export default class SettingsDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/settings`;
  }

  browse() {
    return this.get(`${this.baseURL}`, { key: API_KEY });
  }
}
