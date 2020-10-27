import { GraphQLSchema } from 'graphql';
import GhostQueryType from './types/GhostQuery';

export default new GraphQLSchema({
  query: GhostQueryType,
});
