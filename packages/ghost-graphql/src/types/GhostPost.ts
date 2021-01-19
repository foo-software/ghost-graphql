import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import createConnectionType from '../typeCreators/createConnectionType';
import GhostAuthor from './GhostAuthor';
import GhostTag from './GhostTag';

const GhostPost = new GraphQLObjectType({
  name: 'GhostPost',
  fields: () => ({
    access: { type: GraphQLBoolean },
    authors: { type: new GraphQLList(GhostAuthor) },
    canonicalUrl: { type: GraphQLString },
    codeinjectionFoot: { type: GraphQLString },
    codeinjectionHead: { type: GraphQLString },
    commentId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    customExcerpt: { type: GraphQLString },
    customTemplate: { type: GraphQLString },
    emailSubject: { type: GraphQLString },
    excerpt: { type: GraphQLString },
    featureImage: { type: GraphQLString },
    html: { type: GraphQLString },
    id: { type: new GraphQLNonNull(GraphQLString) },
    metaDescription: { type: GraphQLString },
    metaTitle: { type: GraphQLString },
    ogDescription: { type: GraphQLString },
    ogImage: { type: GraphQLString },
    ogTitle: { type: GraphQLString },
    page: { type: GraphQLBoolean, defaultValue: false },
    plaintext: { type: GraphQLString },
    primaryAuthor: { type: GhostAuthor },
    primaryTag: { type: GhostTag },
    publishedAt: { type: GraphQLString },
    readingTime: { type: GraphQLInt },
    sendEmailWhenPublished: { type: GraphQLBoolean },
    slug: { type: GraphQLString },
    tags: { type: new GraphQLList(GhostTag) },
    title: { type: GraphQLString },
    twitterDescription: { type: GraphQLString },
    twitterImage: { type: GraphQLString },
    twitterTitle: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    url: { type: GraphQLString },
    uuid: { type: GraphQLString },
    visibility: { type: GraphQLString },
  }),
});

export const GhostPostsConnection = createConnectionType({
  name: 'GhostPosts',
  nodeType: GhostPost,
});

export default GhostPost;
