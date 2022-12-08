const express = require('express');
const app = express();
const logger = require('winston');

// Configure the Winston logger to write to a file
logger.add(new logger.transports.File({ filename: '/var/log/application.log' }));

// Create a GET endpoint at '/' that returns a simple message
app.get('/', (req, res) => {
  logger.info('Received a request at "/"');
  res.send('Hello, World!');
});

// Create a GET endpoint at '/users' that returns a list of users
app.get('/users', (req, res) => {
  logger.info('Received a request at "/users"');
  const users = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'Bob Smith' }
  ];
  res.send(users);
});

// Create a GET endpoint at '/users/:id' that returns a single user
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  logger.info(`Received a request at "/users/${id}"`);
  const user = { name: 'John Doe' };
  res.send(user);
});

// Create a POST endpoint at '/users' that adds a new user
app.post('/users', (req, res) => {
  logger.info('Received a request at "/users"');
  const user = req.body;
  // Add the user to the database
  res.send(user);
});

// Create a PUT endpoint at '/users/:id' that updates a user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  logger.info(`Received a request at "/users/${id}"`);
  const user = req.body;
  // Update the user in the database
  res.send(user);
});

// Start the server on port 3000
app.listen(3000, () => {
  logger.info('Server listening on port 3000');
});
