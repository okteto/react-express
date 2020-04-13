const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.json({message: 'Hello World!'});
});

app.post('/api/echo', (req, res) => {
  console.log(req.body);
  res.json({message: `You said: ${req.body.echo}`});
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, "0.0.0.0", () => console.log(`Listening on port ${port}`));