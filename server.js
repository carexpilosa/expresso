const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const fpath404 = path.join(__dirname, 'public', 'file404.html');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/:name', (req, res) => {
  const fpath = path.join(__dirname, 'public', req.params.name);
  if (fs.existsSync(fpath)) {
    res.sendFile(fpath);
  } else {
    res.sendFile(fpath404);
  }
});

app.get('/test', (req, res) => {
  res.send('test test');
});

app.get('/image.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'image.jpeg'));
});

app.listen(3000, () => {
  console.log('running on 3000');
});
