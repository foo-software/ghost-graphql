import { GraphQLSchema } from 'graphql';
import QueryType from './types/Query';

export default new GraphQLSchema({
  query: QueryType,
});
