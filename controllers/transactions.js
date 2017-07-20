const Transaction = require('../models/Transaction')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  all: function(req, res) {
    Transaction.find()
    .populate('booklist')
      .exec(function (err,result) {
        if (err) {
          res.send({err : err})
        } else {
          res.send(result)
        }
      })
  },
  create: function(req, res) {
    var transaction = new Transaction(req.body);
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
    });
  },
  update: function(req, res) {
    Transaction.update({ _id: ObjectId(req.params.id) },
      req.body
    , function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Transaction.remove({ _id: ObjectId(req.params.id) }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }
}
