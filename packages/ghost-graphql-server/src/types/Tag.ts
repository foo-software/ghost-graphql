import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import getConnection from './getConnection';

const Tag = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    accentColor: { type: GraphQLString },
    canonicalUrl: { type: GraphQLString },
    codeinjectionFoot: { type: GraphQLString },
    codeinjectionHead: { type: GraphQLString },
    description: { type: GraphQLString },
    featureImage: { type: GraphQLString },
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

export const TagsConnection = getConnection({
  name: 'Tags',
  nodeType: Tag,
});

export default Tag;
