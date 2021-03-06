const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./static/routes')(app);

app.listen(8000, () => console.log('listen port 8000'));