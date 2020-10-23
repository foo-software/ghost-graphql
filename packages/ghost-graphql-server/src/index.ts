import { ApolloServer } from 'apollo-server';
import npmPackage from '../package.json';
import schema from './schema';
import dataSources from './datasources';

const server = new ApolloServer({
  schema,
  dataSources,
  onHealthCheck: () => {
    // we could check on any queries and reject the promise, if
    // needed to deem health. but for now if this function works
    // we're healthy enough
    return Promise.resolve();
  },
});

server.listen().then(() => {
  console.log(`GraphQL running on version ${npmPackage.version} 🚀`);
});
