const Book = require('../models/Book');

module.exports = {
  all: function(req, res) {
    Book.find(function (err, books) {
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
    Book.findOneAndUpdate(
      {
        _id: req.params.id
      }, 
      req.body, 
      function(err, result) {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
    })
    // Book.update({ _id: req.id }, {
    //   $set: req.body
    // }, function(err, result) {
    //   if (err) {
    //     res.send({err: err})
    //   }
    //   res.send(result)
    // });
  },
  delete: function(req, res) {
    Book.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
