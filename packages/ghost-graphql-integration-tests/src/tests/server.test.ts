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
import mockAuthorResponse from '../mocks/authorResponse';
import mockAuthorsResponse from '../mocks/authorsResponse';
import mockPostResponse from '../mocks/postResponse';
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

const GET_AUTHOR = gql`
  query author($id: String, $slug: String) {
    author(id: $id, slug: $slug) {
      id
      profileImage
    }
  }
`;

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

const GET_POST = gql`
  query post($id: String, $slug: String) {
    post(id: $id, slug: $slug) {
      id
      featureImage
      metaDescription
      sendEmailWhenPublished
      slug
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
  it('fetches an author item by id', async () => {
    const { authorsDataSource, server } = constructTestServer();

    authorsDataSource.get = jest.fn().mockResolvedValue(mockAuthorResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_AUTHOR,
      variables: { id: 'abc123' },
    });
    expect(res).toMatchSnapshot();
  });

  it('fetches an author item by slug', async () => {
    const { authorsDataSource, server } = constructTestServer();

    authorsDataSource.get = jest.fn().mockResolvedValue(mockAuthorResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_AUTHOR,
      variables: { slug: 'some-slug' },
    });
    expect(res).toMatchSnapshot();
  });

  it('fails to fetch an author when args are missing', async () => {
    const { authorsDataSource, server } = constructTestServer();

    authorsDataSource.get = jest.fn().mockResolvedValue(mockAuthorResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_AUTHOR,
      variables: {},
    });
    expect(res).toMatchSnapshot();
  });

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

  it('fetches a post item by id', async () => {
    const { postsDataSource, server } = constructTestServer();

    postsDataSource.get = jest.fn().mockResolvedValue(mockPostResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_POST,
      variables: { id: 'abc123' },
    });
    expect(res).toMatchSnapshot();
  });

  it('fetches a post item by slug', async () => {
    const { postsDataSource, server } = constructTestServer();

    postsDataSource.get = jest.fn().mockResolvedValue(mockPostResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_POST,
      variables: { slug: 'welcome' },
    });
    expect(res).toMatchSnapshot();
  });

  it('fails to fetch a post when args are missing', async () => {
    const { postsDataSource, server } = constructTestServer();

    postsDataSource.get = jest.fn().mockResolvedValue(mockPostResponse);

    const { query } = createTestClient(server);
    const res = await query({
      query: GET_POST,
      variables: {},
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
