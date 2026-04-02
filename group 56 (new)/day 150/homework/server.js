const express = require('express');
const requestCounter = require('./middleware/requestCounter');

const app = express();

app.use(express.json());

app.use(requestCounter);

app.use('/api', require('./routes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});