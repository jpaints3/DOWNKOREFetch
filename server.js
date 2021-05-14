const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
    fs.readFile(__dirname + "/views/index.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html ; charset=UTF-8'});
      res.write(data);
      return res.end();
    });
  }).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });