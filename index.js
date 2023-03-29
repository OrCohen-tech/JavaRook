const rookout = require("rookout");
const http = require('http');
const port = process.env.PORT || 3000;

rookout.start(
  {
    token: 'f37497d5df867115c81e8b8a80f7ca5863bd7ad0ed15ec966defc405e8b9b49c',
    labels: {env: 'dev'}
  }
)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
