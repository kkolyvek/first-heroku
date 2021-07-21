const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
  
app.get('/names', (req, res) => {
  const names = JSON.parse(fs.readFileSync('./db/names.json'));
  res.json(names);
});
  
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));