const express = require('express');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const usersRouter = require('./routes/users');
const pickOrdersRouter = require('./routes/pickOrders');
const cardsRouter = require('./routes/cards');
const setsRouter = require('./routes/sets');

const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, '../client/build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/user', usersRouter);
app.use('/pickOrders', pickOrdersRouter);
app.use('/cards', cardsRouter);
app.use('/sets', setsRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
})