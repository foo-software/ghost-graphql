import { GraphQLString } from 'graphql';
import { API_KEY } from '../constants';

export default {
  key: { type: GraphQLString, defaultValue: API_KEY },
};
