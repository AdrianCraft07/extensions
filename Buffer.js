const { file } = require('@agacraft/fs')

/**
 * @param {string} name
 * @param {function} func
 */
let addFunction = function (name, func) {
  Buffer.prototype[name] = func;
};
addFunction('toFile', function (path = './file.txt') {
  file(path, this)
})