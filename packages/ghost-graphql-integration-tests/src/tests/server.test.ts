import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import {
  AuthorsDataSource,
  PagesDataSource,
  PostsDataSource,
  QuerySchema,
  SettingsDataSource,
  TagsDataSource,
} from '@foo-software/ghost-graphql';
import gql from 'graphql-tag';
import mockPostsResponse from '../mocks/postsResponse';

const constructTestServer = () => {
  const authorsDataSource = new AuthorsDataSource();
  const pagesDataSource = new PagesDataSource();
  const postsDataSource = new PostsDataSource();
  const settingsDataSource = new SettingsDataSource();
  const tagsDataSource = new TagsDataSource();

  const server = new ApolloServer({
    schema: QuerySchema,
    dataSources: () => {
      return {
        authorsDataSource,
        pagesDataSource,
        postsDataSource,
        settingsDataSource,
        tagsDataSource,
      };
    },
  });

  return {
    authorsDataSource,
    pagesDataSource,
    postsDataSource,
    settingsDataSource,
    server,
    tagsDataSource,
  };
};

const GET_POSTS = gql`
  query posts($limit: Number, $page: Number) {
    posts(limit: $limit, page: $page) {
      edges {
        node {
          id
          featureImage
          metaDescription
          sendEmailWhenPublished
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      meta {
        pagination {
          limit
          next
          page
          pages
          prev
          total
        }
      }
    }
  }
`;

describe('Queries', () => {
  it('fetches list of posts', async () => {
    const { postsDataSource, server } = constructTestServer();

    postsDataSource.get = jest.fn().mockResolvedValue(mockPostsResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_POSTS,
      variables: { limit: 2, page: 2 },
    });
    expect(res).toMatchSnapshot();
  });
});
