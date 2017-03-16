var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('hello world');
}).listen(Math.round((1 + Math.random()) * 1000), '127.0.0.1');
