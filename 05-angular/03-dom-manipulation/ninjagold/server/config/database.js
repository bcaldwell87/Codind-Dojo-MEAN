const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/ninjagold', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(mdoelsPath, file)));
