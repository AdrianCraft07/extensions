"use strict";
require("./Array");
require("./Buffer");
require("./Number");
require("./Object");
require("./String");
let createAddProperty = (Class) => function (name, func) {
    Class.prototype.__defineGetter__(name, func);
};
let createAddFunction = (Class) => function (name, func) {
    Class.prototype[name] = func;
};
module.exports = {
    createAddProperty,
    createAddFunction,
};
