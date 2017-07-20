const express = require('express');
const app = express();
const bodyparser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}));
app.use('/books', books);
app.use('/transactions', transactions);


app.listen(3000)