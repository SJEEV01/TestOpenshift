const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


var oc_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var oc_hostname   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(oc_port, oc_hostname, () => {
  console.log(`Server running at http://${oc_hostname}:${oc_port}/`);
});
