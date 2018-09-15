'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: 'A name is required'
    }
});

module.exports = mongoose.model('Users', UserSchema);