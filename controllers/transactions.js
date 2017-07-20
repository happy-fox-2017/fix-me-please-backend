const Transaction  = require('../models/Transaction')

module.exports = {
  all: function(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.send({err: err})
      } else{
      res.send(transactions)
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
      res.send(result)
    });
  },
  update: function(req, res) {
    Transaction.findOne({_id: req.params.id}, (err, transaction)=>{
      if(!err){
        var transactionsUpdate = {
          memberid : req.body.memberid || transaction.memberid,
          days: req.body.days || transaction.days,
          date: req.body.date || transaction.date,
          price: req.body.price || transaction.price,
          booklist: req.body.booklist || transaction.booklist
        }
        Transaction.update({ _id: req.params.id }, {
          $set: transactionsUpdate
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
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      } else{
        res.send(result)
      }
    });
  }
}
