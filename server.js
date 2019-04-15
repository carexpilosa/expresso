const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Moin moin');
});

app.get('/test', (req, res) => {
  res.send('test test');
});


app.listen(3000, () => {
  console.log('running on 3000');
});

