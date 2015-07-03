var express = require('express'),
    app = express();

app.get('/', function (req, res) {
  res.send('hola mundo');
});

var server = app.listen(1337, function () {
  var host = server.address().address,
      port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});