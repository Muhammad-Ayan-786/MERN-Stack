const express = require('express');

const app = express(); // Creating a server instance

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
});

app.get('/about', (req, res) => {
  res.send('<h1>Welcome to about page</h1>')
});

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});