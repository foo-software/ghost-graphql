import { GraphQLSchema } from 'graphql';
import Query from './types/Query';

export default new GraphQLSchema({
  query: Query,
});
