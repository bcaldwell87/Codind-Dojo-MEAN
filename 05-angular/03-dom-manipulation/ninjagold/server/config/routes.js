const controller = require('../controllers/controller.js');

module.exports = function(app) {
  app.get('/gold', function(request, response) {
    controller.gold(request, response);
  });
};
