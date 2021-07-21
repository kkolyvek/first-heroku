const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(
      `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
    );
  });
  
  app.get('/api', (req, res) => {
    res.json({
      term: 'api',
      description:
        'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
    });
  });
  
  app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
  