const authors = require('../controllers/authors.js');

module.exports = function(app) {
  app.get('/authors', authors.index);
  app.get('/:id', authors.display);
  app.post('/authors/new', authors.add);
  app.put('/update/:id', authors.update);
  app.delete('/remove/:id', authors.destroy);
};
