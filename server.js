const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/logo', (req, res) => {
  console.log(req.body);
  var logo = '';
  switch(req.body.logo){
    case "react":
      logo = 'logo512.png';
      break;
    case "okteto":
      logo = 'https://okteto.com/icons/icon-384x384.png';
      break;
    case 'taco':
      logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/2560px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg';
      break;
    default:
      logo = 'https://upload.wikimedia.org/wikipedia/commons/3/32/Baby_Llama_%285615095787%29.jpg'
      break;
  }

  res.json({logo: logo});
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