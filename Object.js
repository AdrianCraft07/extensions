"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Json_1 = __importDefault(require("@agacraft/classes/Json"));
function type(data) {
    return toString.call(data);
}
function isArray(data) {
    return type(data) === '[object Array]';
}
function isObject(data) {
    return type(data) === '[object Object]';
}
function isIterable(data) {
    return isObject(data) || isArray(data);
}
let addFunctionObject = function (name, func) {
    Object.prototype[name] = func;
};
addFunctionObject('toJson', function () {
    return new Json_1.default(this);
});
addFunctionObject('_toString', function () {
    return JSON.stringify(this, null, 2);
});
addFunctionObject('toArray', function () {
    return Object.entries(this);
});
addFunctionObject('keys', function () {
    return Object.keys(this);
});
addFunctionObject('format', function (obj = {}) {
    let bool = false;
    this.keys()
        .filter(value => typeof this[value] == typeof obj[value] || obj[value] == undefined)
        .forEach(value => (bool ||= !!value));
    return bool;
});
addFunctionObject('compare', function (obj = {}) {
    if (!isObject(obj))
        throw new TypeError(`${obj} is not Object`);
    const keysT = this.keys().sort()
    const keysO = obj.keys().sort()
    if (keysT.length !== keysO.length || !keysT.compare(keysO))
        return false;
    return keysT.map(key => [key, this[key]]).compare(keysO.map(key => [key, obj[key]]));
});
addFunctionObject('getData', function (route) {
    if (route == undefined)
        return this;
    let routes = route.split('.');
    if (routes.length == 1)
        return this[routes[0]];
    return isIterable(this[routes[0]])
        ? this[routes[0]].getData(routes.deleteIndex().join('.'))
        : this[routes[0]];
});
addFunctionObject('delete', function (key) {
    delete this[key];
    return this;
});
addFunctionObject('search', function (item) {
    let self = this.keys();
    let object = self.filter(key => isIterable(this[key])), keys;
    if (isIterable(item))
        if (isArray(item))
            keys = self
                .filter(key => isIterable(this[key]))
                .filter(key => this[key].compare(item));
        else
            keys = self
                .filter(key => isIterable(this[key]))
                .filter(key => this[key].compare(item));
    else
        keys = self
            .filter(key => !isIterable(this[key]))
            .filter(key => this[key] === item);
    keys.push(...object
        .map(key => this[key]
        .search(item)
        .map((value) => `${key}.${value || ''}`))
        .map(v => v.filter(v => !v.endsWith('.')))
        .upLevel());
    return keys.filter(value => value);
});
