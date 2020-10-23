import { GraphQLString } from 'graphql';
import authenticationArguments from './authenticationArguments';

export default {
  ...authenticationArguments,
  id: { type: GraphQLString },
  slug: { type: GraphQLString },
};
