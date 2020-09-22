const express = require('express');
const app = express();

app.get('/', function(req, res) {
  //let response = { "HELLO "};
  res.send('HELLO');
});
app.get('/HELLO', function(req, res) {
  //let response = { "This is how /HELLO works" };
  res.send('This is how /HELLO works');
});


app.listen(3000);
