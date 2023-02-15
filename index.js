const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080; 

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/static/about.html');   
});

app.use(express.static(path.join(__dirname, 'static')));   

app.listen(port);
console.log('Server started at http://localhost:' + port);
