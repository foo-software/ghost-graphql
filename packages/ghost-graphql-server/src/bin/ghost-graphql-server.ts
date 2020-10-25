#!/usr/bin/env node
import meow from 'meow';
import createGhostGraphQLServer from '../createGhostGraphQLServer';

const cli = meow();
const { port = 4000 } = cli.flags;

const startServer = async () => {
  try {
    const server = createGhostGraphQLServer({
      onHealthCheck: () => {
        // we could check on any queries and reject the promise, if
        // needed to deem health. but for now if this function works
        // we're healthy enough
        return Promise.resolve();
      },
    });

    await server.listen(port);
    console.log(`Ghost GraphQL server is running on port ${port} 🚀`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
