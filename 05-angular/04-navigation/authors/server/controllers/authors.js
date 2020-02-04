const mongoose = require('mongoose');
let Author = mongoose.model('Author');

module.exports = {
  index: (req, res) => {
    Author.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  add: (req, res) => {
    let newAuthor = new Author(req.body);
    newAuthor.save(err => {
      if (err) {
        res.json({ Error: err });
      } else {
        res.json({ Success: req.body });
        console.log('added!');
      }
    });
  },
  update: (req, res) => {
    console.log('we get HERE?!??!??!!??');
    Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedAuthor) => {
        if (err) {
          res.json({ Error: err });
        } else {
          res.json(updatedAuthor);
          console.log('successfully updated!');
        }
      }
    );
  },
  display: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  destroy: (req, res) => {
    Author.findByIdAndDelete(req.params.id)
      .then(deletedAuthor => {
        res.json(deletedAuthor);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
};
