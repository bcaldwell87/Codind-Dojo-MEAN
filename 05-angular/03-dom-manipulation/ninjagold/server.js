const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const {
  env: { PORT: port = 8000 },
} = process;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/ninjagold')));
app.use(
  session({
    secret: 'blake',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 50000000000 },
  })
);

require('./server/config/database.js');
require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));
