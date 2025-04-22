import { gql } from "@apollo/client";

const PostList = gql`
  query PostList(
    $clientPortalId: String!
    $type: String
    $featured: Boolean
    $categoryId: String
    $searchValue: String
    $status: PostStatus
    $page: Int
    $perPage: Int
    $tagIds: [String]
    $sortField: String
    $sortDirection: String
  ) {
    cmsPostList(
      clientPortalId: $clientPortalId
      featured: $featured
      type: $type
      categoryId: $categoryId
      searchValue: $searchValue
      status: $status
      page: $page
      perPage: $perPage
      tagIds: $tagIds
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      currentPage
      totalCount
      totalPages
      posts {
        _id
        type
        customPostType {
          _id
          code
          label
          __typename
        }
        authorKind
        author {
          ... on User {
            _id
            username
            email
            details {
              fullName
              shortName
              avatar
              firstName
              lastName
              middleName
              __typename
            }
            __typename
          }
          ... on ClientPortalUser {
            _id
            fullName
            firstName
            lastName
            email
            username
            customer {
              avatar
              __typename
            }
            __typename
          }
          __typename
        }
        categoryIds
        categories {
          _id
          name
          __typename
        }
        featured
        status
        tagIds
        tags {
          _id
          name
          __typename
        }
        authorId
        createdAt
        autoArchiveDate
        scheduledDate
        thumbnail {
          url
          __typename
        }
        title
        updatedAt
        __typename
      }
      __typename
    }
  }
`;

const CmsTags = gql`
  query CmsTags(
    $clientPortalId: String!
    $searchValue: String
    $page: Int
    $perPage: Int
    $sortField: String
    $sortDirection: String
  ) {
    cmsTags(
      clientPortalId: $clientPortalId
      searchValue: $searchValue
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      _id
      clientPortalId
      name
      slug
      colorCode
      createdAt
      updatedAt
      __typename
    }
  }
`;

const queries = { PostList, CmsTags };
export default queries;
