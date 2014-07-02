var dbengine = require('nedb');

var db = new dbengine({ filename: 'session.db', autoload: true });

module.exports = {
    get: function getSession(sessionId, req, res, callback){
        db.findOne({ _id: sessionId }, function(err, sessionDocument) {

            sessionDocument.ip = req.ip;
            sessionDocument.lastRequest = new Date;

            db.update({ _id: sessionId}, sessionDocument, function(err, x) {

                return callback(err, sessionDocument);
            } );
        });
    },
    set:function setSession(req, res, callback){
        var session = {
            created: new Date,
            lastRequest: new Date,
            ip: req.ip
        };
        
        db.insert(session, function(err, sessionDocument) {
            return callback(err, sessionDocument);
        });
    }
};