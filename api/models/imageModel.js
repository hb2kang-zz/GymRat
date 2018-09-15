'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    userId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    path: {
        type: String
    }
});

module.exports = mongoose.model('Images', ImageSchema);