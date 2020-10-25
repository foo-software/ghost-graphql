import { ApolloServer } from 'apollo-server';
import { dataSources, QuerySchema } from '@foo-software/ghost-graphql';

export default (options?: any) =>
  new ApolloServer({
    ...options,
    schema: QuerySchema,
    dataSources,
  });
