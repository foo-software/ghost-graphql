import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'Format',
  values: {
    html: { value: 'html' },
    plaintext: { value: 'plaintext' },
  },
});
