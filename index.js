const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const { find, filter } = require('lodash');
const schema = require('./executableSchema');

const port = process.env.PORT || 3000;

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(port, () => {
  console.log('Go to http://localhost:' + port + ' to run queries!');
});