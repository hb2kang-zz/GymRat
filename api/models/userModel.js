'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: 'A name is required'
    }
});

module.exports = mongoose.model('Users', UserSchema);