'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
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
    }
});

module.exports = mongoose.model('Scores', ScoreSchema);