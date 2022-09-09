"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("@agacraft/fs"));
let addFunctionBuffer = function (name, func) {
    Buffer.prototype[name] = func;
};
addFunctionBuffer('toFile', function (path = './file.txt') {
    fs_1.default.file(path, this);
});
