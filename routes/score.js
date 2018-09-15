'use strict';

module.exports = function(app) {

    var scores = require('../api/controllers/scoreController');
  
    app.route('/scores')
        .post(scores.create_score);

    app.route('/scores/:userId')
        .get(scores.get_score)
        .delete(scores.delete_score);
}