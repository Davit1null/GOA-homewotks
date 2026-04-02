require('dotenv').config();

const express = require('express');
const errorhandler = require('errorhandler');

const app = express();

app.get('/', (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME}!`);
});

app.get('/error', (req, res) => {
  throw new Error('This is a test error!');
});

if (process.env.NODE_ENV !== 'production') {
  app.use(errorhandler());
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} is running on port ${PORT}`);
});