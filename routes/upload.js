'use strict';

const util = require('util');
const mongoose = require('mongoose');
var multer=require('multer');

module.exports = function(app) {
    // Uploads
    var schema=new mongoose.Schema({
        item:String
    });

    var model1= mongoose.model('todomod',schema);

    var storage = multer.diskStorage({
        destination: 'assets/uploads/',
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now()+ '.jpg')
        }
    })

    var upload = multer({ storage: storage });

    app.post('/upload', upload.single('uploaded_file'), function (req, res) {
        console.log(req.body);
        console.log(req.file);

        let db_data = {
            item : req.file.path
        };

        model1(db_data).save(function(err, data) {
            if(err) throw err
            res.render('results');
        })
    })
}
