var Book = require('../models/Book')

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
    Book.findOne({_id: req.params.id}, (err, book)=>{
      if(!err){
        var bookUpdate = {
          isbn : req.body.isbn || book.isbn,
          title: req.body.title || book.title,
          author: req.body.author || book.author,
          category: req.body.category || book.category,
          stock: req.body.stock || book.stock
        }
        Book.update({ _id: req.params.id }, {
          $set: bookUpdate
        }, {new: true}, function(err, result) {
          if (err) {
            res.send({err: err})
          } else {
            res.send(result)
          }
        });
      } else {
        res.send({msg: 'id not found'})
      }
    })
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
