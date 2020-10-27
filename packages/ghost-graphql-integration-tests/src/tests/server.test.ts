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
import mockAuthorsResponse from '../mocks/authorsResponse';
import mockPostsResponse from '../mocks/postsResponse';

// best way of mocking until someone can provide a better example
// https://github.com/apollographql/fullstack-tutorial/issues/90
class AuthorsDataSourceWithMockedGet extends AuthorsDataSource {
  get(): any {
    return {};
  }
}
class PagesDataSourceWithMockedGet extends PagesDataSource {
  get(): any {
    return {};
  }
}
class PostsDataSoureWithMockedGet extends PostsDataSource {
  get(): any {
    return {};
  }
}
class SettingsDataSourceWithMockedGet extends SettingsDataSource {
  get(): any {
    return {};
  }
}
class TagsDataSourceWithMockedGet extends TagsDataSource {
  get(): any {
    return {};
  }
}

const constructTestServer = () => {
  const authorsDataSource = new AuthorsDataSourceWithMockedGet();
  const pagesDataSource = new PagesDataSourceWithMockedGet();
  const postsDataSource = new PostsDataSoureWithMockedGet();
  const settingsDataSource = new SettingsDataSourceWithMockedGet();
  const tagsDataSource = new TagsDataSourceWithMockedGet();

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

const GET_AUTHORS = gql`
  query authors($limit: Int, $page: Int) {
    authors(limit: $limit, page: $page) {
      edges {
        node {
          id
          profileImage
          slug
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

const GET_POSTS = gql`
  query posts($limit: Int, $page: Int) {
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
  it('fetches list of authors', async () => {
    const { authorsDataSource, server } = constructTestServer();

    authorsDataSource.get = jest.fn().mockResolvedValue(mockAuthorsResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_AUTHORS,
      variables: { limit: 2, page: 2 },
    });
    expect(res).toMatchSnapshot();
  });

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
