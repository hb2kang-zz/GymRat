'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up routes
const index = require('./routes');
index(app);

app.listen(port, function() {
    console.log('server stared on port 3000');
});
