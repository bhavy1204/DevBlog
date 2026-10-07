export const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    bio: String
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(
      username: String!
      email: String!
      password: String!
    ): User!
  }
`;


