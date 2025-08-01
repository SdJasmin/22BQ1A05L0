const express = require('express');
const app = express();
const customLogger = require('./customLogger');

app.use(customLogger);

app.get('/', (req, res) => {
  res.send('Hello, custom logger!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
