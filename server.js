const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
  // TODO: Send request here
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => {
  console.log('Gladius Node Manager listening on port 8080');
});
