'use strict';

module.exports = function(app) {

    app.get('/', function (req, res) {
        res.render('index', { title: 'Gym Rat'  });
    })

    app.get('/results', function (req, res) {
        res.send('results')
    })

    app.get('/upload', function (req, res) {
        res.render('upload');
    })

}