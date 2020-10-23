import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import getConnection from './getConnection';

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    featureImage: { type: GraphQLString },
    id: { type: new GraphQLNonNull(GraphQLString) },
    metaDescription: { type: GraphQLString },
    metaTitle: { type: GraphQLString },
    ogDescription: { type: GraphQLString },
    ogImage: { type: GraphQLString },
    ogTitle: { type: GraphQLString },
    publishedAt: { type: GraphQLString },
    readingTime: { type: GraphQLInt },
    sendEmailWhenPublished: { type: GraphQLBoolean },
    slug: { type: GraphQLString },
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

export const PostsConnection = getConnection({
  name: 'Posts',
  nodeType: Post,
});

export default Post;
