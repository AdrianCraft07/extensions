"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("@agacraft/fs"));
let addFunctionString = function (name, func) {
    String.prototype[name] = func;
};
addFunctionString('toFile', function (path) {
    fs_1.default.file(path, this);
});
addFunctionString('replaceFull', function (replaces, sign) {
    let newText = this;
    sign = sign || '';
    if (Array.isArray(replaces))
        replaces.forEach(data => {
            if (toString.call(data) === '[object String]') {
                let preReplace = data.split(':');
                let replace = [`${sign}${preReplace[0]}${sign}`, preReplace[1]];
                newText = newText.replaceAll(replace[0], replace[1]);
            }
        });
    return newText;
});
addFunctionString('toObject', function () {
    try {
        return JSON.parse(this);
    }
    catch (e) {
        return {};
    }
});
addFunctionString('toRegExp', function (flags) {
    return RegExp(this, flags);
});
addFunctionString('reverse', function () {
    return this.split('').reverse().join('');
});
addFunctionString('setLength', function (length) {
    let data, array = this.split('');
    if (this.length > length)
        array.length = length;
    else
        while (array.length <= length)
            array.push(' ');
    data = array.join('');
    return data;
});
