const { concat, merge } = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const resolvers = [];
const typeDefs = [];
const queryDefs = [];

[
  'pokemon'
].forEach(model => {
  const { schema, resolvers: modelResolvers, query } = require('./' + model);
  typeDefs.push(schema);
  queryDefs.push(query);
  resolvers.push(modelResolvers);
});

const queryTypeDefs = `
  type Query {
    ${queryDefs.concat('')}
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [...typeDefs, queryTypeDefs],
  resolvers: merge(...resolvers)
});