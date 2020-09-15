"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneGenerator = void 0;
var utils_1 = require("../utils");
var PhoneGenerator = (function () {
    function PhoneGenerator() {
        this.countryCode = '+375';
        this.operatorCode = [25, 29, 33, 44];
    }
    PhoneGenerator.prototype.getMobilePhone = function () {
        return this.countryCode + this.operatorCode[utils_1.getRandomInt(0, this.operatorCode.length)] + utils_1.getRandomInt(1000000, 9999999);
    };
    PhoneGenerator.prototype.getStationaryPhone = function () {
        return this.countryCode + '17' + utils_1.getRandomInt(1000000, 9999999);
    };
    return PhoneGenerator;
}());
exports.PhoneGenerator = PhoneGenerator;
//# sourceMappingURL=phone.generator.js.map