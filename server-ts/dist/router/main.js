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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var file_generator_service_1 = require("../file/file-generator.service");
var file_parser_service_1 = require("../file/file-parser.service");
var path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
var fileGeneratorService = new file_generator_service_1.FileGeneratorService();
var fileParserService = new file_parser_service_1.FileParserService();
router.get('/', function (req, res, next) {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, '../static/') });
});
router.get('/generate/userList', function (req, res, next) {
    var model = {
        id: 'number',
        login: 'string',
        password: 'string',
        role: 'RoleEnum         // user role @general;',
        permissionList: [
            {
                id: 'number',
                name: 'PermissionNameEnum'
            }
        ]
    };
    var userList = fileGeneratorService.generateMockFormObjectModel(model);
    fileGeneratorService.generateOutputFile('userList.json', JSON.stringify(userList, null, 2))
        .then(function (result) { return res.send([
        result,
        JSON.stringify({ helper: __spread(fileGeneratorService.helper) }, null, 2)
    ]); })
        .catch(function (err) { return res.send('error at fileGeneratorService.generateOutputFile\n' + err); });
});
router.get('/generate/contactList', function (req, res, next) {
    var model = {
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
                note: 'string',
            }
        ]
    };
    var contactList = fileGeneratorService.generateMockFormObjectModel(model);
    fileGeneratorService.addHelper('contactModel[]', contactList);
    fileGeneratorService.generateOutputFile('contactList.json', JSON.stringify(contactList, null, 2))
        .then(function (result) { return res.send([
        result,
        JSON.stringify({ helper: __spread(fileGeneratorService.helper) }, null, 2)
    ]); })
        .catch(function (err) { return res.send('error at fileGeneratorService.generateOutputFile\n' + err); });
});
router.get('/generate/customerList', function (req, res, next) {
    var model = {
        id: 'number',
        photo: 'string',
        firstName: 'string',
        middleName: 'string',
        lastName: 'string',
        birthday: 'string',
        gender: 'string',
        tags: 'TagModel[]',
        maritalStatus: 'string          //@values[\'Холост\', \'Женат/Замужем\'];',
        contact: 'ContactModel',
        address: {
            registration: 'AddressModel',
            actual: 'AddressModel',
        },
        identityDocument: {
            type: 'string',
            number: 'string',
            issueDate: 'string',
            expirationDate: 'string',
            attachment: 'File'
        },
        parentContactList: [
            {
                firstName: 'string',
                middleName: 'string',
                lastName: 'string',
                phone: 'string[]',
                mobile: [
                    {
                        phone: 'string',
                        note: 'string'
                    }
                ],
            }
        ],
        allergyList: 'AllergyModel[]',
        genericType: 'Array<number>',
        genericCustomType: 'Array<AllergyModel>',
        tupleType: ['number', 'string'],
        tupleTypeArray: [['number', 'string']],
        medicalCard: {
            bloodType: 'BloodTypeModel',
            chronicDiseaseList: 'ChronicDiseaseModel[]',
            allergyList: 'AllergyModel[]',
        },
        paymentInfo: {
            insuranceCompany: {
                name: 'string',
                address: 'AddressModel',
                contact: 'ContactModel'
            }
        }
    };
    var contactList = fileGeneratorService.generateMockFormObjectModel(model);
    fileGeneratorService.generateOutputFile('customerList.json', JSON.stringify(contactList, null, 2))
        .then(function (result) { return res.send([
        result,
        JSON.stringify({ helper: __spread(fileGeneratorService.helper) }, null, 2)
    ]); })
        .catch(function (err) { return res.send('error at fileGeneratorService.generateOutputFile\n' + err); });
});
router.get('/generate/employeeList', function (req, res, next) {
    var model = {
        id: 'number',
        photo: 'string',
        firstName: 'string',
        middleName: 'string',
        lastName: 'string',
        birthday: 'string',
        gender: 'string',
        tags: 'TagModel[]',
        maritalStatus: 'string          //@values[\'Холост\', \'Женат/Замужем\'];',
        contact: 'ContactModel',
        address: {
            registration: 'AddressModel',
            actual: 'AddressModel',
        },
        position: 'string   //@values["Врач", "Главрач", "Ассистент Врача", "Менеджер", "Кладовщик"];',
        permissionList: 'PermissionModel[]',
        department: {
            name: 'string   //@values["Зубодробители", "Челюстные Копатели", "Дыробурильщики"];',
            address: 'AddressModel',
        },
        skills: {
            academicDegree: 'string[]   //@values["Доцент", "Бакалавр", "Магистр"];',
            qualification: 'string',
            category: 'string'
        }
    };
    var employeeList = fileGeneratorService.generateMockFormObjectModel(model);
    fileGeneratorService.generateOutputFile('employeeList.json', JSON.stringify(employeeList, null, 2))
        .then(function (result) { return res.send([
        result,
        JSON.stringify({ helper: __spread(fileGeneratorService.helper) }, null, 2)
    ]); })
        .catch(function (err) { return res.send('error at fileGeneratorService.generateOutputFile\n' + err); });
});
exports.default = router;
//# sourceMappingURL=main.js.map