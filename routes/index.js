'use strict';

const mongoose = require('mongoose');
const Images = mongoose.model('Images');

module.exports = function(app) {

    app.get('/', function (req, res) {
        res.render('index', { title: 'Gym Rat'  });
    })

    app.get('/results', function (req, res) {
        Images.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, image) {
            console.log(image);
            res.render('results', { path: image.path})
        });
    })

    app.get('/upload', function (req, res) {
        res.render('upload');
    })

}