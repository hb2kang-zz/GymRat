'use strict';

const util = require('util');
const mongoose = require('mongoose');
var multer=require('multer');

module.exports = function(app) {

    var storage = multer.diskStorage({
        destination: 'assets/uploads/',
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now()+ '.jpg')
        }
    })

    var upload = multer({ storage: storage });

    const Image = require('../api/models/imageModel')

    app.post('/upload', upload.single('uploaded_file'), function (req, res) {

        let db_data = {
            path : req.file.path
        };

        Image(db_data).save(function(err, data) {
            if(err) throw err
            res.render('results', db_data);
        })
    })
}
