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
        this._dataModel.set('PermissionModel', {
            id: 'number',
            name: 'string   //@values["Сотрудники", "Пациенты", "Лекарства", "Методы Лечения", "Прайсинг", "Календарь"];',
        });
        this._dataModel.set('File', {
            size: 'number',
            type: 'string',
            blob: 'string'
        });
        this._dataModel.set('BloodTypeModel', {
            type: 'BloodTypeEnum',
            rhFactor: 'RhesusFactorEnum'
        });
        this._dataModel.set('ChronicDiseaseModel', {
            id: 'number',
            name: 'string   //@values[\'Атеросклероз\', \'Ишемическая Болезнь Сердца\', \'Хронический Миокардит\', \'Кардиомиопатия\'];',
            tags: 'TagModel[]',
            note: 'string'
        });
        this._dataModel.set('TagModel', {
            id: 'number',
            name: 'string   //@values[\'Врач\', \'Главрач\', \'Персонал\', \'Доцент\', \'Кандидат Наук\', \'Кладовщик\'];'
        });
        this._dataModel.set('AllergyModel', {
            id: 'number',
            name: 'string   //@values[\'Пыльца\', \'Латекс\', \'Химические Реактивы\', \'Медицинские Препараты\', \'Споры Грибков Или Плесени\'];',
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
                    name: 'string     //@values[\'Facebook\', \'Instagram\', \'Telegram\', \'Viber\', \'VK\'];',
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
        this._helper.set('RhesusFactorEnum', {
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
        var OUTPUT_DIR = './output/';
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
        console.log('{');
        console.group('a: ********************* START ********************');
        console.log((isFirstLevel ? 'First' : '') + (" generateMockFormObject of " + loopCount + " items. isArray: "));
        console.log('\n\tModel');
        console.table(modelEntries);
        console.log('\n\tHelper');
        console.table(templateSource ? Object.entries(templateSource) : ['Helper not found']);
        console.log('\n\tGeneral Entry');
        console.table(generalEntry ? generalEntry : ['General Entry Not Found']);
        var _loop_1 = function (i) {
            var pivotal = this_1.getLocalValueForGeneralEntry(generalEntry);
            console.groupCollapsed("Iteration " + (i + 1) + ", pivot: ", pivotal, templateSource);
            var param = {};
            modelEntries.forEach(function (_a) {
                var _b, _c;
                var _d = __read(_a, 2), key = _d[0], value = _d[1];
                var _e = __read(FileGeneratorService.getTypeAndMarks(value), 2), typeDef = _e[0], marks = _e[1];
                var _f = __read(_this.getTypeDefinitionFromArrayOrGenerics(typeDef), 2), singleTypeDef = _f[0], isArray = _f[1];
                console.log('*********************************************');
                console.log(utils_1.LogColor.FgMagenta, 'STEP::', utils_1.LogColor.FgYellow, 'key: ', utils_1.LogColor.FgCyan, key, utils_1.LogColor.FgYellow, '\n\tarray: ', utils_1.LogColor.FgCyan, isArray, utils_1.LogColor.FgYellow, '\n\ttype:', utils_1.LogColor.FgCyan, singleTypeDef, utils_1.LogColor.FgYellow, '\n\tmarks:', utils_1.LogColor.FgCyan, marks, utils_1.LogColor.Reset);
                if (_this.isTuple(singleTypeDef)) {
                    console.log('\x1b[44m%s\x1b[0m', 'is Tuple');
                }
                var preferredValuesList = _this.extractPreferredValueListMark(marks);
                if (preferredValuesList && preferredValuesList.length) {
                    var valueFromPreferredList = _this.generateValues([function () { return FileGeneratorService.getRandomValueFromList(preferredValuesList); }], key, isArray);
                    Object.assign(param, valueFromPreferredList);
                }
                else {
                    switch (singleTypeDef) {
                        case 'boolean':
                            Object.assign(param, _this.getRandomizedBooleanVariable(key, isArray));
                            break;
                        case 'number':
                            Object.assign(param, _this.getRandomizedNumberVariable(key, isArray, i));
                            break;
                        case 'string':
                            Object.assign(param, _this.getRandomizedStringVariable(key, pivotal, isArray, i));
                            break;
                        case 'any':
                            Object.assign(param, _this.getRandomizedAnyVariable(key, isArray));
                            break;
                        default:
                            if (_this.isTuple(singleTypeDef)) {
                                Object.assign(param, _this.getRandomizedTupleVariable(key, singleTypeDef, isArray));
                            }
                            else {
                                console.log('/////', 1);
                                if (!_this._helper.has(singleTypeDef)) {
                                    console.log('/////', 2);
                                    console.log(utils_1.LogColor.FgMagenta, 'CUSTOM TYPE::', utils_1.LogColor.FgYellow, key, utils_1.LogColor.FgMagenta, 'type model', utils_1.LogColor.FgCyan, singleTypeDef, utils_1.LogColor.Reset);
                                    if (typeof singleTypeDef === 'object') {
                                        console.log('1 **** For Object', utils_1.LogColor.FgYellow, key, utils_1.LogColor.Reset);
                                        var temp = _this.generateMockFormObjectModel(singleTypeDef, false);
                                        _this._helper.set(key, temp);
                                    }
                                    if (typeof singleTypeDef === 'string') {
                                        console.log('2 **** For String', utils_1.LogColor.FgYellow, key, utils_1.LogColor.Reset);
                                        if (!_this._dataModel.has(singleTypeDef)) {
                                            throw new Error("model for key \"" + singleTypeDef + "\" not found");
                                        }
                                        console.log("generate helper [" + key + "] for ", singleTypeDef);
                                        var temp = _this.generateMockFormObjectModel(_this._dataModel.get(singleTypeDef), false);
                                        _this._helper.set(key, temp);
                                    }
                                }
                                else if (templateSource) {
                                    _this._helper.set(key, templateSource);
                                }
                                else if (pivotal && pivotal.key === key) {
                                    Object.assign(param, (_b = {}, _b[key] = pivotal.value, _b));
                                }
                                if (_this._helper.has(key)) {
                                    var a = _this.generateArrayFromHelper(key);
                                    console.log(a);
                                    var result = isArray ? a : a[utils_1.getRandomInt(0, a.length)];
                                    Object.assign(param, (_c = {}, _c[key] = result, _c));
                                }
                            }
                            break;
                    }
                }
            });
            resultList.push(param);
            console.groupEnd();
        };
        var this_1 = this;
        for (var i = 0; i < loopCount; i++) {
            _loop_1(i);
        }
        console.log('a: ************************  end  *****************************');
        console.groupEnd();
        console.log('}');
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
    FileGeneratorService.prototype.generateValues = function (generatorsList, key, isArray) {
        var _a, _b;
        var stepValue = [];
        if (isArray) {
            var rLength = utils_1.getRandomInt(0, 10);
            var arr = [];
            for (var i = 0; i < rLength; i++) {
                stepValue = [];
                generatorsList.forEach(function (generator) {
                    stepValue.push(generator());
                });
                arr.push(stepValue.length !== 1 ? stepValue : stepValue[0]);
            }
            return _a = {}, _a[key] = arr, _a;
        }
        generatorsList.forEach(function (generator) {
            stepValue.push(generator());
        });
        return _b = {}, _b[key] = stepValue.length !== 1 ? stepValue : stepValue[0], _b;
    };
    FileGeneratorService.prototype.getRandomizedNumberVariable = function (key, isArray, index) {
        return this.generateValues([function () { return key === 'id' ? index : utils_1.getRandomInt(10000, 99999999); }], key, isArray);
    };
    FileGeneratorService.prototype.getRandomizedBooleanVariable = function (key, isArray) {
        return this.generateValues([function () { return Boolean(utils_1.getRandomInt(0, 1)); }], key, isArray);
    };
    FileGeneratorService.prototype.getRandomizedAnyVariable = function (key, isArray) {
        var generator = function () {
            var randomValueType = utils_1.getRandomInt(0, 3);
            if (randomValueType === 0) {
                return Boolean(utils_1.getRandomInt(0, 1));
            }
            if (randomValueType === 1) {
                return utils_1.getRandomInt(10000, 99999999);
            }
            if (randomValueType === 2) {
                return new lorem_generator_1.LoremGenerator().getLoremIpsum();
            }
            return { id: 1, ind: 2, name: 'Джорданий Йованович' };
        };
        return this.generateValues([generator], key, isArray);
    };
    FileGeneratorService.prototype.getRandomizedTupleVariable = function (key, tuple, isArray) {
        var generatorFuncList = [];
        var generatorFunc;
        tuple.forEach(function (item) {
            switch (item) {
                case 'boolean':
                    generatorFunc = function () { return Boolean(utils_1.getRandomInt(0, 1)); };
                    break;
                case 'number':
                    generatorFunc = function () { return utils_1.getRandomInt(10000, 99999999); };
                    break;
                case 'string':
                    generatorFunc = function () { return new lorem_generator_1.LoremGenerator().getLoremIpsum(); };
                    break;
                case 'any':
                    generatorFunc = function () {
                        var randomValueType = utils_1.getRandomInt(0, 3);
                        if (randomValueType === 0) {
                            return Boolean(utils_1.getRandomInt(0, 1));
                        }
                        if (randomValueType === 1) {
                            return utils_1.getRandomInt(10000, 99999999);
                        }
                        if (randomValueType === 2) {
                            return new lorem_generator_1.LoremGenerator().getLoremIpsum();
                        }
                        return { id: 1, ind: 2, name: 'Джорданий Йованович' };
                    };
                    break;
                default:
                    break;
            }
            generatorFuncList.push(generatorFunc);
        });
        return this.generateValues(generatorFuncList, key, isArray);
    };
    FileGeneratorService.prototype.getRandomizedStringVariable = function (key, pivot, isArray, index) {
        var _this = this;
        var generator;
        var param = {};
        switch (key) {
            case 'id':
                generator = function () {
                    return index;
                };
                break;
            case 'login':
            case 'password':
                generator = function () {
                    return (pivot ? pivot.value.toLowerCase() : 'login') + '-' + index;
                };
                break;
            case 'photo':
                generator = function () {
                    return 'data:image/png;base64,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';
                };
                break;
            case 'birthday':
                generator = function () {
                    return new Date(1979).toISOString();
                };
                break;
            case 'expirationDate':
                generator = function () {
                    var now = new Date();
                    return new Date(now.getFullYear(), utils_1.getRandomInt(now.getMonth(), 14), utils_1.getRandomInt(0, 31)).toISOString();
                };
                break;
            case 'startDate':
                generator = function () {
                    var now = new Date();
                    return new Date(now.getFullYear(), utils_1.getRandomInt(0, now.getMonth()), utils_1.getRandomInt(0, now.getDate())).toISOString();
                };
                break;
            case 'date':
            case 'finishDate':
            case 'endDate':
                generator = function () {
                    return new Date().toISOString();
                };
                break;
            case 'firstName':
            case 'lastName':
            case 'middleName':
            case 'gender':
                generator = function () {
                    return new name_generator_1.NameGenerator().getFullName();
                };
                break;
            case 'phone':
                generator = function () {
                    return new phone_generator_1.PhoneGenerator().getMobilePhone();
                };
                break;
            case 'email':
                generator = function () {
                    return 'example@example.com';
                };
                break;
            default:
                generator = function () {
                    return new lorem_generator_1.LoremGenerator().getLoremIpsum();
                };
                break;
        }
        if (this.isFullNameOrGender(key)) {
            var a = this.generateValues([function () { return _this.getFullNameAndGender(generator); }], key, isArray);
            var values = Object.values(a);
            values.forEach(function (valueGroup) {
                var _a;
                for (var aKey in valueGroup) {
                    Object.assign(param, (_a = {}, _a[aKey] = valueGroup[aKey], _a));
                }
            });
            return param;
        }
        return this.generateValues([generator], key, isArray);
    };
    FileGeneratorService.prototype.extractPreferredValueListMark = function (marks) {
        if (!marks) {
            return [];
        }
        var valueMarks = marks.find(function (mark) { return typeof mark === 'string' && mark.includes('@values'); });
        if (valueMarks) {
            var arr = valueMarks.replace(/@values\[|\]|'|"|;/gu, '').split(',');
            return arr.map(function (item) { return (typeof item === 'string' ? item.trim() : item); });
        }
        return [];
    };
    FileGeneratorService.getRandomValueFromList = function (itemList) {
        if (!itemList) {
            return '';
        }
        var randomInd = utils_1.getRandomInt(0, itemList.length);
        return itemList[randomInd];
    };
    FileGeneratorService.prototype.isFullNameOrGender = function (key) {
        return key === 'firstName' || key === 'lastName' || key === 'middleName' || key === 'gender';
    };
    FileGeneratorService.prototype.getFullNameAndGender = function (generatorFunc) {
        var result = {};
        var _a = __read(generatorFunc(), 3), lastName = _a[0], firstName = _a[1], middleName = _a[2];
        var gender = new name_generator_1.NameGenerator().isMale(firstName) ? 'Мужской' : 'Женский';
        Object.assign(result, { firstName: firstName });
        Object.assign(result, { lastName: lastName });
        Object.assign(result, { middleName: middleName });
        Object.assign(result, { gender: gender });
        return result;
    };
    FileGeneratorService.prototype.getTypeDefinitionFromArrayOrGenerics = function (typeDefinition) {
        if (Array.isArray(typeDefinition) && !this.isTuple(typeDefinition) || FileGeneratorService.isCustomTypeArray(typeDefinition)) {
            return [this.getModelFormArray(typeDefinition), true];
        }
        return [typeDefinition, false];
    };
    FileGeneratorService.prototype.isTuple = function (value) {
        return Array.isArray(value) && value.length > 1 && !(value[0] instanceof Object);
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
    FileGeneratorService.getLoopCount = function (generatedHelper) {
        return generatedHelper && (generatedHelper === null || generatedHelper === void 0 ? void 0 : generatedHelper.length) ? Object.values(generatedHelper).length : 10;
    };
    FileGeneratorService.prototype.generateArrayFromHelper = function (key) {
        var generatedHelper = this._helper.get(key);
        if (generatedHelper && !Array.isArray(generatedHelper)) {
            generatedHelper = Object.values(generatedHelper);
        }
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
    return FileGeneratorService;
}());
exports.FileGeneratorService = FileGeneratorService;
//# sourceMappingURL=file-generator.service.js.map