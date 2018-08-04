import { gql } from "apollo-server";
import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge';

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import ResolutionsResolvers from '../../api/resolutions/resolvers';

// ye

const testSchema = gql`
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`;

const typeDefs = [ResolutionsSchema, testSchema];

const testResolvers = {
  Query: {
    hi: () => {
      return "Hello, Bro!";
    }
  }
}

const resolvers = merge(testResolvers, ResolutionsResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });
