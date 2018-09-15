'use strict';

module.exports = function(app) {

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html')
    })

    app.get('/results', function (req, res) {
        res.send('results')
    })

}