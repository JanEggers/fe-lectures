module.exports = function() {
    function Logger(){}

    Logger.log = function(start, end, handler) {

        for ( var i = start; i <= end; i++)
        {
            handler(i);
        }
    };

    return Logger;
};