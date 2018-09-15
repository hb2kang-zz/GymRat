'use strict';

module.exports = function(app) {

    var users = require('../api/controllers/userController');
    app.route('/users')
        .get(users.list_users)
        .post(users.create_user);
  
    app.route('/users/:userId')
        .get(users.get_user)
        .put(users.update_user)
        .delete(users.delete_user);
}