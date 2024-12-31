import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import createConnectionType from '../typeCreators/createConnectionType';
import GhostPostsCount from './GhostPostsCount';

const GhostTag = new GraphQLObjectType({
  name: 'GhostTag',
  fields: () => ({
    accentColor: { type: GraphQLString },
    canonicalUrl: { type: GraphQLString },
    codeinjectionFoot: { type: GraphQLString },
    codeinjectionHead: { type: GraphQLString },
    count: { type: GhostPostsCount },
    description: { type: GraphQLString },
    featureImage: { type: GraphQLString },
    featureImageAlt: { type: GraphQLString },
    featureImageCaption: { type: GraphQLString },
    id: { type: new GraphQLNonNull(GraphQLString) },
    metaDescription: { type: GraphQLString },
    metaTitle: { type: GraphQLString },
    name: { type: GraphQLString },
    ogDescription: { type: GraphQLString },
    ogImage: { type: GraphQLString },
    ogTitle: { type: GraphQLString },
    slug: { type: GraphQLString },
    twitterDescription: { type: GraphQLString },
    twitterImage: { type: GraphQLString },
    twitterTitle: { type: GraphQLString },
    url: { type: GraphQLString },
    visibility: { type: GraphQLString },
  }),
});

export const GhostTagsConnection = createConnectionType({
  name: 'GhostTags',
  nodeType: GhostTag,
});

export default GhostTag;
