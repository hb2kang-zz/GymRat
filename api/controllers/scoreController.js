'use strict';

const mongoose = require('mongoose');
const Score = mongoose.model('Scores');

exports.create_score = function(req, res) {
    var new_score = new Score(req.body);
    new_score.save(function(err, score) {
        if (err)
            res.send(err);
        res.json(score);
    });
};

exports.get_score = function(req, res) {
    // Add logic to get most recent score
    Score.findOne({ userId: req.params.userId}, function(err, score) {
        if (err)
            res.send(err);
        res.json(score);
    });
};

exports.delete_score = function(req, res) {
    Score.remove({
        _id: req.params.scoreId
    }, function(err, score) {
        if (err)
            res.send(err);
        res.json({ message: 'Score successfully deleted' });
    });
};
