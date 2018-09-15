'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    userId: {
        type: String,
        required: 'A User ID is required'
    },
    userScore: {
        type: Number,
        required: 'A user score is required'
    },
    excercise: {
        type: String,
        required: 'The exercise type is needed'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Scores', ScoreSchema);