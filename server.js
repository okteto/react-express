const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.json({message: 'Hello World!'});
});

app.post('/api/echo', (req, res) => {
  console.log(req.body);
  res.json({message: `You said: ${req.body.echo}`});
});

app.listen(port, "0.0.0.0", () => console.log(`Listening on port ${port}`));