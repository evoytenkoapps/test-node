"use strict";
var promise = new Promise(function (res, resolve) {
    console.log("start");
    res(undefined);
});
console.log("before then");
promise.then(function (data) { return console.log("then"); });
console.log("after then");
