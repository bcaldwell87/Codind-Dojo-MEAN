const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(8000);
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist/authors'));

require('./server/config/database.js');
// app.use(require('./server/config/catch.routes.js'))
require('./server/config/routes.js')(app);
