const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('*', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});

http.listen(3001, () => {
  console.log("Listening on 3001");
});