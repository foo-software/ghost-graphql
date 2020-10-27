import { GraphQLObjectType } from 'graphql';
import author from '../resolvers/author';
import authors from '../resolvers/authors';
import page from '../resolvers/page';
import pages from '../resolvers/pages';
import post from '../resolvers/post';
import posts from '../resolvers/posts';
import settings from '../resolvers/settings';
import tag from '../resolvers/tag';
import tags from '../resolvers/tags';

export default new GraphQLObjectType({
  name: 'GhostQuery',
  fields: () => ({
    author,
    authors,
    page,
    pages,
    post,
    posts,
    settings,
    tag,
    tags,
  }),
});
