// eslint-disable-next-line no-shadow
import Express, { NextFunction, Request, Response } from 'express';
import { FileGeneratorService } from '../file/file-generator.service';
import { FileParserService } from '../file/file-parser.service';
import path from 'path';

const router = Express.Router();
const fileGeneratorService = new FileGeneratorService();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fileParserService = new FileParserService()


/**
 * Welcome Page
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../static/') });
});


/**
 * Route for generate a JSON file of 100 items by userListModel
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/generate/userList', (req: Request, res: Response, next: NextFunction) => {
  const model = {
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
  }

  const userList = fileGeneratorService.generateMockFormObjectModel(model);

  fileGeneratorService.generateOutputFile('userList.json', JSON.stringify(userList, null, 2))
    // eslint-disable-next-line promise/prefer-await-to-then
    .then(result => res.send([
      result,
      JSON.stringify({ helper: [...fileGeneratorService.helper] }, null, 2)
    ]))
    // eslint-disable-next-line sonarjs/no-duplicate-string
    .catch(err => res.send('error at fileGeneratorService.generateOutputFile\n' + err))
})


/**
 * Route for generate a JSON file of 100 items by contact List Model
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/generate/contactList', (req: Request, res: Response, next: NextFunction) => {
  const model = {
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
  }

  const contactList = fileGeneratorService.generateMockFormObjectModel(model)
  fileGeneratorService.addHelper('contactModel[]', contactList);

  fileGeneratorService.generateOutputFile('contactList.json', JSON.stringify(contactList, null, 2))
    // eslint-disable-next-line promise/prefer-await-to-then,sonarjs/no-identical-functions
    .then(result => res.send([
        result,
        JSON.stringify({ helper: [...fileGeneratorService.helper] }, null, 2)
      ]))
    .catch(err => res.send('error at fileGeneratorService.generateOutputFile\n' + err))
});


/**
 * Route for generate a JSON file of 100 items by contact List Model
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/generate/customerList', (req: Request, res: Response, next: NextFunction) => {
  const model = {
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
  }

  const contactList = fileGeneratorService.generateMockFormObjectModel(model)
  // fileGeneratorService.addHelper('contactModel[]', contactList);

  fileGeneratorService.generateOutputFile('customerList.json', JSON.stringify(contactList, null, 2))
    // eslint-disable-next-line promise/prefer-await-to-then,sonarjs/no-identical-functions
    .then(result => res.send([
      result,
      JSON.stringify({ helper: [...fileGeneratorService.helper] }, null, 2)
    ]))
    .catch(err => res.send('error at fileGeneratorService.generateOutputFile\n' + err))
});

/**
 * Route for generate a JSON file of 100 items by contact List Model
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/generate/employeeList', (req: Request, res: Response, next: NextFunction) => {
  const model = {
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
  }

  const employeeList = fileGeneratorService.generateMockFormObjectModel(model)
  // fileGeneratorService.addHelper('contactModel[]', contactList);

  fileGeneratorService.generateOutputFile('employeeList.json', JSON.stringify(employeeList, null, 2))
    // eslint-disable-next-line promise/prefer-await-to-then,sonarjs/no-identical-functions
    .then(result => res.send([
      result,
      JSON.stringify({ helper: [...fileGeneratorService.helper] }, null, 2)
    ]))
    .catch(err => res.send('error at fileGeneratorService.generateOutputFile\n' + err))
});

export default router;
