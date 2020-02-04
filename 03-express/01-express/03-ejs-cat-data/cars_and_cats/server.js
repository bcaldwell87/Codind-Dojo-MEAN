var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
  response.send("<h1>Hello Express</h1>");
})
app.get("/cars", function (request, response) {
  response.render('cars');
})
app.get("/cats", function (request, response) {
  response.render('cats');
})
app.get("/cars/new", function (request, response) {
  response.render('form');
})
app.listen(8000, function () {
  console.log("listening on port 8000");
})
app.get("/cats/lion", function (request, response) {
  var cat_information = [
    { name: "Lion", age: 3, favoritefood: "Poachers", sleepingspots: ["under a tree", "in the sun"], },
  ];
  response.render('catinfo', { info: cat_information });
})