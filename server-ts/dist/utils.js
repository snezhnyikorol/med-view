"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogColor = exports.getRandomInt = void 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
var LogColor;
(function (LogColor) {
    LogColor["Reset"] = "\u001B[0m";
    LogColor["Bright"] = "\u001B[1m";
    LogColor["Dim"] = "\u001B[2m";
    LogColor["Underscore"] = "\u001B[4m";
    LogColor["Blink"] = "\u001B[5m";
    LogColor["Reverse"] = "\u001B[7m";
    LogColor["Hidden"] = "\u001B[8m";
    LogColor["FgBlack"] = "\u001B[30m";
    LogColor["FgRed"] = "\u001B[31m";
    LogColor["FgGreen"] = "\u001B[32m";
    LogColor["FgYellow"] = "\u001B[33m";
    LogColor["FgBlue"] = "\u001B[34m";
    LogColor["FgMagenta"] = "\u001B[35m";
    LogColor["FgCyan"] = "\u001B[36m";
    LogColor["FgWhite"] = "\u001B[37m";
    LogColor["BgBlack"] = "\u001B[40m";
    LogColor["BgRed"] = "\u001B[41m";
    LogColor["BgGreen"] = "\u001B[42m";
    LogColor["BgYellow"] = "\u001B[43m";
    LogColor["BgBlue"] = "\u001B[44m";
    LogColor["BgMagenta"] = "\u001B[45m";
    LogColor["BgCyan"] = "\u001B[46m";
    LogColor["BgWhite"] = "\u001B[47m";
})(LogColor = exports.LogColor || (exports.LogColor = {}));
//# sourceMappingURL=utils.js.map