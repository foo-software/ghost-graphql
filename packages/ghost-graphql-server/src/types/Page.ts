import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import getConnection from './getConnection';

const Page = new GraphQLObjectType({
  name: 'Page',
  fields: () => ({
    access: { type: GraphQLBoolean },
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
    id: { type: new GraphQLNonNull(GraphQLString) },
    metaDescription: { type: GraphQLString },
    metaTitle: { type: GraphQLString },
    ogDescription: { type: GraphQLString },
    ogImage: { type: GraphQLString },
    ogTitle: { type: GraphQLString },
    page: { type: GraphQLBoolean },
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

export const PagesConnection = getConnection({
  name: 'Pages',
  nodeType: Page,
});

export default Page;
