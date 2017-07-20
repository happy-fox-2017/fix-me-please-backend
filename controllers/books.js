const Book =  require('../models/Book')

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
    var book = new Book (req.body)
    book.save(function (err, result) {
         console.log('ini book result');
         console.log('result' + result);
      if (err) {
           console.log('ini error'+err);
        res.send({err: err})
    } else {
        res.send(result)
   }
    });
  },
  update: function(req, res) {
    Book.update({ _id: req.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Book.remove({ _id: req.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
