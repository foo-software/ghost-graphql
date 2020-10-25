import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import createConnectionType from '../typeCreators/createConnectionType';

const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    bio: { type: GraphQLString },
    coverImage: { type: GraphQLString },
    facebook: { type: GraphQLString },
    id: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLString },
    metaDescription: { type: GraphQLString },
    metaTitle: { type: GraphQLString },
    name: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    slug: { type: GraphQLString },
    twitter: { type: GraphQLString },
    url: { type: GraphQLString },
    website: { type: GraphQLString },
  }),
});

export const AuthorsConnection = createConnectionType({
  name: 'Authors',
  nodeType: Author,
});

export default Author;