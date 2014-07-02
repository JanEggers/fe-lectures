var defaultController = require('./Controllers/default');

module.exports = function routes(app) {
    app.route('/')
        .get(defaultController.get)
    ;

};