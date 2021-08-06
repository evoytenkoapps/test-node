"use strict";
var promiseArg = function (resolve, reject) {
    console.log("start");
    resolve(undefined);
};
var promise = new Promise(promiseArg);
console.log("before then");
promise.then(function (data) { return console.log("then"); });
console.log("after then");
//# sourceMappingURL=index.js.map