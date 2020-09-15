"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGeneratorService = void 0;
var basic_type_array_enum_1 = require("./basic-type-array.enum");
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../utils");
var name_generator_1 = require("../generators/name.generator");
var phone_generator_1 = require("../generators/phone.generator");
var lorem_generator_1 = require("../generators/lorem.generator");
var BasicTypeEnum;
(function (BasicTypeEnum) {
    BasicTypeEnum["NUMBER"] = "number";
    BasicTypeEnum["STRING"] = "string";
    BasicTypeEnum["BOOLEAN"] = "boolean";
    BasicTypeEnum["ANY"] = "any";
})(BasicTypeEnum || (BasicTypeEnum = {}));
var FileGeneratorService = (function () {
    function FileGeneratorService() {
        this.blockIdent = '  ';
        this._dataModel = new Map();
        this._helper = new Map();
        this._dataModel.set('File', {
            size: 'number',
            type: 'string',
            blob: 'string'
        });
        this._dataModel.set('BloodTypeModel', {
            type: 'BloodTypeEnum',
            rhFactor: 'RhesusFactor'
        });
        this._dataModel.set('ChronicDiseaseModel', {
            id: 'number',
            name: 'string',
            tags: 'TagModel[]',
            note: 'string'
        });
        this._dataModel.set('TagModel', {
            id: 'number',
            name: 'string'
        });
        this._dataModel.set('AllergyModel', {
            id: 'number',
            name: 'string',
            tags: 'TagModel[]',
            note: 'string'
        });
        this._dataModel.set('AddressModel', {
            houseNumber: 'string',
            apartmentNumber: 'string',
            locality: 'string',
            country: 'string',
            postIndex: 'string',
            region: 'string',
            street: 'string'
        });
        this._dataModel.set('ContactModel', {
            phone: 'string[]',
            email: 'string[]',
            messengerList: [
                {
                    name: 'string',
                    link: 'string',
                }
            ],
            mobile: [
                {
                    isMainPhone: 'boolean',
                    phone: 'string',
                    note: 'string'
                }
            ]
        });
        this._helper.set('boolean[]', [true, false]);
        this._helper.set('number[]', [
            1234567890,
            4567899045,
            7890123345,
            6758493021,
            3456745634,
            9078789676,
            5746546644,
            3456543465
        ]);
        this._helper.set('any[]', [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            4567899045,
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            6758493021,
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            9078789676,
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            3456543465
        ]);
        this._helper.set('string[]', [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam',
            'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'Excepteur sint occaecat cupidatat non proident',
            'Sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]);
        this._helper.set('PermissionNameEnum', {
            GUEST: 'Guest',
            MANAGER: 'Manager',
            SUPERVISOR: 'Supervisor',
            DOCTOR: 'Doctor'
        });
        this._helper.set('RoleEnum', {
            SUPER_ADMIN: 'SuperAdmin',
            ADMIN: 'Administrator',
            EMPLOYEE: 'Employee',
            CUSTOMER: 'Customer'
        });
        this._helper.set('BloodTypeEnum', {
            O: 'I',
            A: 'II',
            B: 'III',
            AB: 'IV'
        });
        this._helper.set('RhesusFactor', {
            POSITIVE: '+',
            NEGATIVE: '-'
        });
    }
    Object.defineProperty(FileGeneratorService.prototype, "helper", {
        get: function () {
            return this._helper;
        },
        enumerable: false,
        configurable: true
    });
    FileGeneratorService.prototype.addHelper = function (key, value) {
        this._helper.set(key, value);
    };
    FileGeneratorService.prototype.generateOutputFile = function (fileName, fileBody) {
        var OUTPUT_DIR = './dist/static/';
        var fileExist = false;
        return new Promise(function (resolve, reject) {
            fs_1.default.unlink(OUTPUT_DIR + fileName, function (err) {
                fileExist = !err;
                fs_1.default.writeFile(OUTPUT_DIR + fileName, fileBody, function (error) {
                    if (error) {
                        reject(error);
                    }
                    resolve("... " + (fileExist ? 'update' : 'create') + " file " + fileName);
                });
            });
        });
    };
    FileGeneratorService.prototype.generateMockFormObjectModel = function (objectModel, isFirstLevel) {
        var _this = this;
        if (isFirstLevel === void 0) { isFirstLevel = true; }
        var resultList = [];
        var templateSource = this.findGeneratedHelper(objectModel);
        var loopCount = isFirstLevel ? 1 : FileGeneratorService.getLoopCount(templateSource);
        var modelEntries = Object.entries(objectModel);
        var generalEntry = this.findGeneralEntry(modelEntries);
        console.group('********************* START ********************');
        console.log((isFirstLevel ? 'First' : '') + (" generateMockFormObject of " + loopCount + " items. isArray: "));
        console.log('\n\tModel');
        console.table(modelEntries);
        console.log('\n\tHelper');
        console.table(templateSource ? Object.entries(templateSource) : ['Helper not found']);
        console.log('\n\tGeneral Entry');
        console.table(generalEntry ? generalEntry : ['General Entry Not Found']);
        var _loop_1 = function (i) {
            var pivotal = this_1.getLocalValueForGeneralEntry(generalEntry);
            console.group("Iteration " + (i + 1) + ", pivot: ", pivotal, templateSource);
            var param = {};
            modelEntries.forEach(function (_a) {
                var _b, _c, _d, _e, _f, _g, _h, _j, _k;
                var _l = __read(_a, 2), key = _l[0], value = _l[1];
                var _m = __read(FileGeneratorService.getTypeAndMarks(value), 2), typeDef = _m[0], marks = _m[1];
                console.log("* current step: " + key, typeDef, marks);
                if ((pivotal || templateSource) && _this._helper.has(typeDef)) {
                    console.log(1);
                    if (pivotal && typeDef === pivotal.key) {
                        console.log('assign Pivotal Value For:', key, typeDef);
                        Object.assign(param, (_b = {}, _b[key] = pivotal.value, _b));
                    }
                    else if (templateSource) {
                        var rand = utils_1.getRandomInt(0, templateSource.length);
                        console.log('assign Template Source For:', key, typeDef);
                        Object.assign(param, (_c = {}, _c[key] = templateSource[rand], _c));
                    }
                }
                else {
                    console.log(2);
                    switch (typeDef) {
                        case 'boolean':
                            Object.assign(param, (_d = {}, _d[key] = utils_1.getRandomInt(0, 1) === 1, _d));
                            break;
                        case 'number':
                            Object.assign(param, (_e = {}, _e[key] = i, _e));
                            break;
                        case 'string':
                            switch (key) {
                                case 'login':
                                    Object.assign(param, (_f = {}, _f[key] = (pivotal ? pivotal.value.toLowerCase() : '') + '-' + i, _f));
                                    break;
                                case 'password':
                                    Object.assign(param, (_g = {},
                                        _g[key] = Buffer.from((pivotal ? pivotal.value.toLowerCase() : '') + '-' + i).toString('base64').replace(/=/gu, ''),
                                        _g));
                                    break;
                                case 'firstName':
                                case 'lastName':
                                case 'middleName':
                                    var _o = __read(new name_generator_1.NameGenerator().getFullName(), 3), lastName = _o[0], firstName = _o[1], middleName = _o[2];
                                    Object.assign(param, { firstName: firstName });
                                    Object.assign(param, { lastName: lastName });
                                    Object.assign(param, { middleName: middleName });
                                    break;
                                case 'phone':
                                    console.log('<<<<<<<<<<<<<<<<', key, typeDef);
                                    Object.assign(param, { phone: new phone_generator_1.PhoneGenerator().getMobilePhone() });
                                    break;
                                case 'email':
                                    Object.assign(param, { email: 'example@example.com' });
                                    break;
                                default:
                                    Object.assign(param, (_h = {}, _h[key] = new lorem_generator_1.LoremGenerator().getLoremIpsum(), _h));
                                    break;
                            }
                            break;
                        default:
                            console.log('-------------------------------------------------------');
                            console.log('Generate Helper For Custom Or Array Type');
                            var isArray = false;
                            var processedValue_1 = typeDef;
                            if (key === 'phone' || key === 'email') {
                                console.log('<<<<<<<<<', key);
                            }
                            console.log('>>> type definition:', processedValue_1);
                            if (Array.isArray(typeDef) && !_this.isTuple(typeDef) || FileGeneratorService.isCustomTypeArray(typeDef)) {
                                console.log('>>> is array type');
                                processedValue_1 = _this.getModelFormArray(typeDef);
                                processedValue_1 = processedValue_1 ? processedValue_1 : typeDef;
                                isArray = true;
                            }
                            else {
                                console.log('>>> is single type');
                                if (_this.isTuple(typeDef)) {
                                    console.log('>>> is Tuple');
                                }
                            }
                            if (isArray && typeof processedValue_1 === 'object' && !_this._helper.has(key)) {
                                console.log('1 ****', key, processedValue_1);
                                var temp = _this.generateMockFormObjectModel(processedValue_1, false);
                                _this._helper.set(key, temp);
                            }
                            if (typeof processedValue_1 === 'string' && !_this._helper.has(key)) {
                                if (Object.values(BasicTypeEnum).some(function (val) { return val === processedValue_1; })) {
                                    console.log('2.1 ****', key, processedValue_1);
                                    if (key === 'phone' || key === 'email') {
                                        console.log('<><><><><>', key);
                                    }
                                    Object.assign(param, (_j = {}, _j[key] = _this.generateArrayFromHelper(processedValue_1 + "[]"), _j));
                                }
                                else {
                                    console.log('2.2 ****', key, processedValue_1);
                                    if (!_this._dataModel.has(processedValue_1)) {
                                        throw new Error("model for key \"" + processedValue_1 + "\" not found");
                                    }
                                    console.log("generate helper [" + key + "] for ", processedValue_1);
                                    var temp = _this.generateMockFormObjectModel(_this._dataModel.get(processedValue_1), false);
                                    _this._helper.set(key, temp);
                                }
                            }
                            if (_this._helper.has(key)) {
                                var a = _this.generateArrayFromHelper(key);
                                var result = isArray ? a : a[utils_1.getRandomInt(0, a.length)];
                                if (key === 'contact') {
                                    console.log('set param for CONTACT', isArray);
                                    console.log(result);
                                }
                                Object.assign(param, (_k = {}, _k[key] = result, _k));
                            }
                            break;
                    }
                }
                console.warn('step result', param);
            });
            resultList.push(param);
            console.groupEnd();
        };
        var this_1 = this;
        for (var i = 0; i < loopCount; i++) {
            _loop_1(i);
        }
        console.log('************************  end  *****************************');
        console.groupEnd();
        return resultList;
    };
    FileGeneratorService.prototype.findGeneratedHelper = function (objectModel) {
        var keys = Object.keys(objectModel);
        var values = Object.values(objectModel);
        var helperName = null;
        var baseTypeEnum = Object.values(BasicTypeEnum);
        var _loop_2 = function (i) {
            if (!baseTypeEnum.some(function (val) { return val === values[i]; })) {
                helperName = values[i];
                return { value: this_2._helper.has(helperName) ? Object.values(this_2._helper.get(helperName)) : null };
            }
        };
        var this_2 = this;
        for (var i = 0; i < keys.length; i++) {
            var state_1 = _loop_2(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return null;
    };
    FileGeneratorService.prototype.isTuple = function (value) {
        return Array.isArray(value) && value.length > 1 && !(value[0] instanceof Object);
    };
    FileGeneratorService.prototype.getGlobalValueForCurrentIteration = function (helper, entry) {
        var _this = this;
        if (helper) {
            entry.some(function (_a) {
                var _b = __read(_a, 2), value = _b[1];
                if (_this._helper.has(value) && helper && value === 'RoleEnum') {
                    return helper[utils_1.getRandomInt(0, helper.length)];
                }
            });
        }
        return null;
    };
    FileGeneratorService.prototype.findGeneralEntry = function (modelEntries) {
        var result = null;
        modelEntries.some(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var _c = __read(FileGeneratorService.getTypeAndMarks(value), 2), typeDef = _c[0], marks = _c[1];
            if (marks && marks.includes('@general;')) {
                result = { key: key, typeDef: typeDef, marks: marks };
                return true;
            }
            return false;
        });
        return result;
    };
    FileGeneratorService.prototype.getLocalValueForGeneralEntry = function (generalEntry) {
        if (!generalEntry || !this._helper.has(generalEntry.typeDef)) {
            return null;
        }
        var helper = Object.values(this._helper.get(generalEntry.typeDef));
        return {
            key: generalEntry.key,
            value: helper[utils_1.getRandomInt(0, helper.length)],
            marks: generalEntry.marks
        };
    };
    FileGeneratorService.prototype.getModelFormArray = function (value) {
        var result;
        if (Array.isArray(value) && value.length === 1 && !this.isTuple(value)) {
            result = value[0];
        }
        else if (typeof value === 'string' && value.search(/Array<|>/) !== -1) {
            result = value.replace(/Array<|>|\s/gu, '');
        }
        else if (typeof value === 'string' && value.includes('[]')) {
            result = value.replace(/\[]|\s/, '');
        }
        else {
            console.warn(value, 'of undefined');
            return null;
        }
        return result;
    };
    FileGeneratorService.isBasicTypeArray = function (value) {
        return typeof value === 'string' && Boolean(basic_type_array_enum_1.BasicTypeArrayEnum[value]);
    };
    FileGeneratorService.isCustomTypeArray = function (value) {
        return typeof value === 'string' && !this.isBasicTypeArray(value)
            && (value.includes('[]') || value.search(/Array<|>/) !== -1);
    };
    FileGeneratorService.getTypeAndMarks = function (value) {
        if (typeof value === 'string') {
            return [value.replace(/(\s+)|\/\/(.+)/gu, ''), value.match(/@.*?;/gu)];
        }
        return [value, null];
    };
    FileGeneratorService.prototype.isEntryPresentedAsSetOfProperties = function (key, value) {
        return Array.isArray(value) && !this._helper.has(key);
    };
    FileGeneratorService.getLoopCount = function (generatedHelper) {
        return generatedHelper && (generatedHelper === null || generatedHelper === void 0 ? void 0 : generatedHelper.length) ? Object.values(generatedHelper).length : 10;
    };
    FileGeneratorService.prototype.generateArrayFromHelper = function (key) {
        var generatedHelper = this._helper.get(key);
        var countOfItems = utils_1.getRandomInt(1, generatedHelper.length);
        var itemList = [];
        for (var n = 0; n <= countOfItems; n++) {
            var rand = utils_1.getRandomInt(1, generatedHelper.length);
            if (!itemList.includes(generatedHelper[rand])) {
                itemList.push(generatedHelper[rand]);
            }
        }
        return itemList;
    };
    FileGeneratorService.prototype.generateArrayFromType = function (type) {
        var itemList = [];
        var values = this._helper.get(type);
        var countOfItems = utils_1.getRandomInt(1, values.length);
        for (var n = 0; n <= countOfItems; n++) {
            var rand = utils_1.getRandomInt(0, values.length - 1);
            if (!itemList.includes(values[rand])) {
                itemList.push(values[rand]);
            }
        }
        return itemList;
    };
    return FileGeneratorService;
}());
exports.FileGeneratorService = FileGeneratorService;
//# sourceMappingURL=file-generator.service.js.map