var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  price: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
