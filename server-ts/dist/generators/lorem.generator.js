"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoremGenerator = void 0;
var utils_1 = require("../utils");
var LoremGenerator = (function () {
    function LoremGenerator() {
        this.loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'.split(/\s/);
    }
    LoremGenerator.prototype.getLoremIpsum = function () {
        var loremLength = utils_1.getRandomInt(3, this.loremIpsumText.length);
        return this.loremIpsumText.splice(0, loremLength).join(' ');
    };
    return LoremGenerator;
}());
exports.LoremGenerator = LoremGenerator;
//# sourceMappingURL=lorem.generator.js.map