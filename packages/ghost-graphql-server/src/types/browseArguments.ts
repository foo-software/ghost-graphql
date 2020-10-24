// https://ghost.org/docs/api/v3/content/#parameters
import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

const Format = new GraphQLEnumType({
  name: 'Format',
  values: {
    html: { value: 'html' },
    plaintext: { value: 'plaintext' },
  },
});

export default {
  fields: { type: new GraphQLList(GraphQLString) },
  filter: { type: new GraphQLList(GraphQLString) },
  formats: { type: new GraphQLList(Format) },
  include: { type: new GraphQLList(GraphQLString) },
  limit: { type: GraphQLInt },
  order: { type: GraphQLString },
  page: { type: GraphQLInt },
};
