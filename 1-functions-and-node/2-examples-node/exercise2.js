module.exports = function() {
    function File() {
    }

    var fs = require('fs');

    File.Append = function (path) {
        fs.appendFile(path, "hello", function (error) {
            if (error) {
                console.log(error);
                return;
            }
            File.Read();
        });
    };

    File.Read = function (path) {
        fs.readFile(path, function (err, content) {
            if (err) {
                console.error(err);
                return;
            }

            console.log(content.toString());
            File.Delete();
        });
    };

    File.Delete = function (path) {
        fs.unlink(path, function (error) {
            if (error) {
                console.log(error);
                return;
            }
        });
    };

    return File;
};