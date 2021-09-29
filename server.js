
const http = require('http');
const app = require('./app');
const hostname = '127.0.0.1';
const port = process.env.port || 4000;
const server = http.createServer(app);
server.listen(port,'0.0.0.0', () =>
console.log(`Server Started At PORT: ${port} {Cryptozoon-App-Backend}`));