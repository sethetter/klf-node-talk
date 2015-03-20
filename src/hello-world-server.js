var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World\n');
});

server.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
