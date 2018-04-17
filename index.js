async = require("async");
items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var a = 0;
async.each(items,
    function (item, callback) {

        plusOne(item, function (retValue) {
            a += retValue;
            callback();
        });
    },
    function (err) {
        console.log("All done: " + a);
    }
);

function plusOne(item, callback) {
    var retValue = item + 1;
    callback(retValue);
}