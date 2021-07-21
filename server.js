const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
  
  app.get('/api', (req, res) => {
    res.json({
      term: 'api',
      description:
        'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
    });
  });
  
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
  