// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];

// Create server
http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");

  if (pathname == '/') {
    pathname = '/index.html';
  }

  // Read file
  fs.readFile(path.join(__dirname, pathname), function(err, data) {
    if (err) {
      console.log(err);
      res.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data.toString());
    }
    res.end();
  });
}).listen(3000);

console.log('Server running at http://localhost:3000/');