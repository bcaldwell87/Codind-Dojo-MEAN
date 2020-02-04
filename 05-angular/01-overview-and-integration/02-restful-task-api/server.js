const compress = require('compression');
const parser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const mongoose = require("mongoose");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(helmet())
  .use(compress())
  .use(cors())
  .use(logger('dev'))
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/restful_task_API");
require('./server/models/task.model.js');

//routes
app.use('/tasks', require('./server/config/routes/task.routes'));



app.listen(port, () => console.log(`express listening on port ${ port }`));
