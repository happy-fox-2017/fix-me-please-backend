var Book = require('../models/Book.js')

module.exports = {
  all: function(req, res) {
    Book.find({}, function (err, books) {
      if (err) {
        res.send({err: err})
      }
      res.send(books)
    })
  },
  create: function(req, res) {
    var book = new Book(req.body);
    book.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    let id = req.params._id
    Book.findOneAndUpdate(id, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  deletes: function(req, res) {
    let id = req.params._id
    Book.deleteOne(id, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
