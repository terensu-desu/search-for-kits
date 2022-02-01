const express = require('express');
const fs = require('fs');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.json());

app.get('/kits/:id', async (request, response) => {
  const kitDatabase = fs.readFileSync(`${__dirname}/KITS_SHIPPING_DATA.json`, 'utf8');
  const kits = JSON.parse(kitDatabase);
  const matchedKit = kits.find(kit => kit['label_id'] === request.params.id) || [];
  response.status(200).send(matchedKit);
});

app.get('/kits/typeahead/:query', async (request, response) => {
  const kitDatabase = fs.readFileSync(`${__dirname}/KITS_SHIPPING_DATA.json`, 'utf8');
  const kits = JSON.parse(kitDatabase);
  const matches = kits.map(kit => kit['label_id']).filter(code => code.includes(request.params.query));
  response.status(200).json(matches);
});

app.use('/', proxy('localhost:3000')); 

app.listen(8000, () => console.log("🙋🏾‍♂️ Greetings! Got the server is running on port http://localhost:8000 for ya."))