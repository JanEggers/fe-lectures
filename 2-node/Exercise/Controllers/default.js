
var defaultController = {
    get: function getDefault(req, res, next) {
        res.write( req.session.lastRequest.toUTCString());
        res.write( "\r\n");
        res.write( "\r\n");
        res.write( "\r\n");
        res.end( req.session.ip );
    }
};

module.exports = defaultController;
