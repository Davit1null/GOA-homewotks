const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', require('./routes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});