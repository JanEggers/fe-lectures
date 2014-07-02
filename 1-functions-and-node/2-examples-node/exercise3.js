var http = require('http');

var numbers = require('./exercise1')();
var file = require('./exercise2')();

http.createServer(function (req, res) {
    if ( req.url == "/numbers" )
    {
        numbers.log(0,5, res.write );

        res.end();
    }
    else if ( req.url == "/file" )
    {
        file.append( 'some.file' );
    }
    else
    {
        res.end( "kenn ich nich" + req.url);
    }

}).listen(3000);
