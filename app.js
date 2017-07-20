const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const books = require('./routes/books');
const transactions = require('./routes/transactions');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected');
});

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000);
