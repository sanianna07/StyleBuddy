const http = require('http');
const port = 3000; // Change the port if necessary

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    // You can try another port or handle the error as needed
    // For example, you can attempt to start the server on a different port
    // const newPort = port + 1;
    // server.listen(newPort);
  } else {
    console.error('An unexpected error occurred:', error);
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
