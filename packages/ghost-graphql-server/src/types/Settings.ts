import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import Navigation from './Navigation';

export default new GraphQLObjectType({
  name: 'Settings',
  fields: () => ({
    codeinjectionFoot: { type: GraphQLString },
    codeinjectionHead: { type: GraphQLString },
    coverImage: { type: GraphQLString },
    description: { type: GraphQLString },
    facebook: { type: GraphQLString },
    icon: { type: GraphQLString },
    lang: { type: GraphQLString },
    logo: { type: GraphQLString },
    membersSupportAddress: { type: GraphQLString },
    metaDescription: { type: GraphQLString },
    metaTitle: { type: GraphQLString },
    navigation: { type: new GraphQLList(Navigation) },
    ogDescription: { type: GraphQLString },
    ogImage: { type: GraphQLString },
    ogTitle: { type: GraphQLString },
    secondaryNavigation: { type: new GraphQLList(Navigation) },
    timezone: { type: GraphQLString },
    title: { type: GraphQLString },
    twitter: { type: GraphQLString },
    twitterDescription: { type: GraphQLString },
    twitterImage: { type: GraphQLString },
    twitterTitle: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});
