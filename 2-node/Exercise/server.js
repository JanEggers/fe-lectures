var http = require('http');
var express = require('express');
var routes = require('./routes');
var sessionModel = require('./Models/session');
var cookieParser = require('cookie-parser');
var app = express();

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, err.stack);
});

var p = cookieParser();

app.use(p);
app.use(handleSession);
app.use(logging);

routes(app);

function logging(req, res, next) {
    console.log( "request: " + req.originalUrl);
    next();
};

function handleSession(req, res, next) {
    if (req.cookies.sessionId) {
        sessionModel.get(req.cookies.sessionId, req, res, function(err, session) {
            req.session = session;
            return next();
        } );
    }
    else
    {
        sessionModel.set(req, res, function(err, session) {
            req.session = session;
            res.cookie('sessionId', session._id);
            return next();
        })
    }
}

http.createServer(app).listen(3000);