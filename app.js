'use strict';

const path = require('path');

const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');

// Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up database
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/db';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Register models
const User = require('./api/models/userModel');
const Score = require('./api/models/scoreModel'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up routes
const index = require('./routes/index');
index(app);
const users = require('./routes/user');
users(app);

app.listen(port, function() {
    console.log('server stared on port 3000');
});
