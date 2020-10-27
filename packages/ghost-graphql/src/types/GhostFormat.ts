import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'GhostFormat',
  values: {
    html: { value: 'html' },
    plaintext: { value: 'plaintext' },
  },
});
