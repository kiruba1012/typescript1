var generateError = function (message, code) {
    throw {
        message: message,
        code: code,
    };
};
var result = generateError('kiruba', 23);
console.log(result);
