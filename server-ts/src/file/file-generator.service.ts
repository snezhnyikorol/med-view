import { BasicTypeArrayEnum } from './basic-type-array.enum';
import fs from 'fs';
import {getRandomInt} from "../utils";
import {NameGenerator} from "../generators/name.generator";
import {PhoneGenerator} from "../generators/phone.generator";
import {LoremGenerator} from "../generators/lorem.generator";

// eslint-disable-next-line no-shadow
enum BasicTypeEnum {
  NUMBER = 'number',
  STRING = 'string',
  BOOLEAN = 'boolean',
  ANY = 'any'
}

export class FileGeneratorService {
  private readonly blockIdent = '  ';
  private readonly _dataModel = new Map();
  private readonly _helper = new Map();

  public get helper(): Map<any, any> {
    return this._helper;
  }

  constructor() {
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
    ])
    this._helper.set('string[]', [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident',
      'Sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ])
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

  public addHelper(key: string, value: any): void {
    this._helper.set(key, value);
  }

  /**
   * Create or Update Mock File
   * @param {string} fileName - file name with extension
   * @param {*} fileBody - content of the file
   * @return {Promise<*>}
   */
  public generateOutputFile(fileName: string, fileBody: any): Promise<any> {
    const OUTPUT_DIR = './dist/static/'
    let fileExist = false;
    return new Promise((resolve, reject) => {
      fs.unlink(OUTPUT_DIR + fileName, err => {
        fileExist = !err;
        fs.writeFile(OUTPUT_DIR + fileName, fileBody, error => {
          if (error) {
            reject(error);
          }
          resolve(`... ${fileExist ? 'update' : 'create'} file ${fileName}`)
        });
      });
    })
  }


  /**
   * Generate Mock Content By Object Model
   * @param {Object} objectModel
   * @param {boolean} isFirstLevel - flag define top level of recursion (generate 100 item on top level)
   * @return {[]} result list
   */
  public generateMockFormObjectModel(objectModel: { [key: string]: any|any[] }, isFirstLevel = true) {
    const resultList: { [key: string]: any }[] = [];
    const templateSource = this.findGeneratedHelper(objectModel);
    const loopCount = isFirstLevel ? 1 : FileGeneratorService.getLoopCount(templateSource);
    const modelEntries: [string, any|any[]][] = Object.entries(objectModel);
    const generalEntry = this.findGeneralEntry(modelEntries) // элемент помеченный символом @general (должен стать оправной точкой для генерации свего остального набора)

    console.group('********************* START ********************')
    console.log((isFirstLevel ? 'First' : '') + ` generateMockFormObject of ${loopCount} items. isArray: `);
    console.log('\n\tModel');
    console.table(modelEntries);
    console.log('\n\tHelper');
    console.table(templateSource ? Object.entries(templateSource) : ['Helper not found'])
    console.log('\n\tGeneral Entry');
    console.table(generalEntry ? generalEntry : ['General Entry Not Found']);

    for (let i = 0; i < loopCount; i++) {
      // const globalForIteration = this.getGlobalValueForCurrentIteration(templateSource, modelEntries);
      const pivotal: { key: string; value: any; marks: string[]}|null = this.getLocalValueForGeneralEntry(generalEntry);
      console.group(`Iteration ${i + 1}, pivot: `, pivotal, templateSource);
      const param: any = {}
      modelEntries.forEach(([key, value]) => {
        const [typeDef, marks] = FileGeneratorService.getTypeAndMarks(value);
        console.log(`* current step: ${key}`, typeDef, marks);
        // если найден шаблон и среди шаблонов есть тот чьё имя указано в типе(typeDef) рассматриваемого параметра модели
        if ((pivotal || templateSource) && this._helper.has(typeDef)) {
          console.log(1);
          if (pivotal && typeDef === pivotal.key) { // Точка привязки в приоритете
            console.log('assign Pivotal Value For:', key, typeDef);
            Object.assign(param, { [key]: pivotal.value })
           } else if (templateSource) {
            const rand = getRandomInt(0, templateSource.length)
            console.log('assign Template Source For:', key, typeDef);
            Object.assign(param, { [key]: templateSource[rand] })
          }
        } else {
          console.log(2);
          switch (typeDef) {
            case 'boolean':
              Object.assign(param, { [key]: getRandomInt(0,1) === 1 });
              break;
            case 'number':
              Object.assign(param, { [key]: i });
              break;
            case 'string':
              switch (key) {
                case 'login':
                  Object.assign(param, { [key]: (pivotal ? pivotal.value.toLowerCase() : '') + '-' + i });
                  break;
                case 'password':
                  Object.assign(param, {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    [key]: Buffer.from((pivotal ? pivotal.value.toLowerCase() : '') + '-' + i).toString('base64').replace(/=/gu, '')
                  });
                  break;
                case 'firstName':
                case 'lastName':
                case 'middleName':
                  const [lastName, firstName, middleName] = new NameGenerator().getFullName();
                  Object.assign(param, { firstName });
                  Object.assign(param, { lastName });
                  Object.assign(param, { middleName });
                  break;
                case 'phone':
                  console.log('<<<<<<<<<<<<<<<<', key, typeDef);
                  Object.assign(param, { phone: new PhoneGenerator().getMobilePhone() });
                  break;
                case 'email':
                  Object.assign(param, { email: 'example@example.com' });
                  break;
                default:
                  Object.assign(param, { [key]: new LoremGenerator().getLoremIpsum() });
                  break
              }
              break;
            default:
              console.log('-------------------------------------------------------')
              console.log('Generate Helper For Custom Or Array Type');
              // Обработка оставшихся базовых типов "any[], string[], number[], boolean[]" а так же
              // интерфейсов, итерфейсов[], {a: string, b:number} и [{a: string, b:number}] вместе с кортежами
              // шаг 1. находим все типы с массивами => и приводим к единственному объекту, при этом помечаем как массив
              let isArray = false;
              let processedValue = typeDef;
              if (key === 'phone' || key === 'email') {
                console.log('<<<<<<<<<', key);
              }
              console.log('>>> type definition:', processedValue);
              if (Array.isArray(typeDef) && !this.isTuple(typeDef) || FileGeneratorService.isCustomTypeArray(typeDef)) {
                console.log('>>> is array type');
                processedValue = this.getModelFormArray(typeDef);
                processedValue = processedValue ? processedValue : typeDef;
                isArray = true;
              } else {
                console.log('>>> is single type');
                if (this.isTuple(typeDef)) {
                  console.log('>>> is Tuple');
                }
              }

              // is custom type array and has no helper => generate helper
              if (isArray && typeof processedValue === 'object' && !this._helper.has(key)) { // Тип объявлен как [ {param1: type, param2: type} ]
                console.log('1 ****', key, processedValue);
                const temp = this.generateMockFormObjectModel(processedValue, false);
                this._helper.set(key, temp);
              }
              // is basic type array and no helper => generate helper
              if (typeof processedValue === 'string' && !this._helper.has(key)) { // Указанный тип это строка 'string' | 'CustomType'
                if (Object.values(BasicTypeEnum).some(val => val === processedValue)) { // Указанный тип является базовым string | number | boolean | any
                  // TODO: использовать заготовленный хелпер this._helper для генерации
                  //  одиночного значения или массива в зависимости от флага isArray
                  console.log('2.1 ****', key, processedValue);
                  if (key === 'phone' || key === 'email') {
                    console.log('<><><><><>', key)
                  }
                  Object.assign(param, { [key]: this.generateArrayFromHelper(`${processedValue}[]`) });
                } else {
                  // TODO: так как тип не является простым, то необходимо проверить
                  //  интерфейс(описание) данного типа в мапе _dataModel. При обнаружении
                  //  декларации интерфейса вызвать метод this.generateMockFormObjectModel(value[0], false);
                  console.log('2.2 ****', key, processedValue);
                  if (!this._dataModel.has(processedValue)) {
                    throw new Error(`model for key "${processedValue}" not found`);
                  }
                  console.log(`generate helper [${key}] for `, processedValue)
                  const temp = this.generateMockFormObjectModel(this._dataModel.get(processedValue), false);
                  this._helper.set(key, temp);
                }
              }
              // console.log('>>> single value: ', processedValue);
              // console.log('-------------------------------------------------------')
              if (this._helper.has(key)) {
                const a = this.generateArrayFromHelper(key);
                const result = isArray ? a : a[getRandomInt(0, a.length)]
                if (key === 'contact') {
                  console.log('set param for CONTACT', isArray);
                  console.log(result);
                }
                Object.assign(param, { [key]: result });
              }

/*
              if (this.isEntryPresentedAsSetOfProperties(key, typeDefinition)
                || FileGeneratorService.isBasicTypeArray(value)
                || FileGeneratorService.isCustomTypeArray(value)
              ) {
                if (this.isEntryPresentedAsSetOfProperties(key, typeDefinition) && !this.isTuple(typeDefinition)) {
                  console.log(`generate helper [${key}] for `, value[0])
                  const temp = this.generateMockFormObjectModel(value[0], false);
                  this._helper.set(key, temp);
                }
                if (FileGeneratorService.isBasicTypeArray(value)) {
                  Object.assign(param, { [key]: this.generateArrayFromHelper(value) });
                }
                if (FileGeneratorService.isCustomTypeArray(value)) {
                  console.log('Custom type Array', value);
                }
                if (this._helper.has(key)) {
                  Object.assign(param, { [key]: this.generateArrayFromHelper(key) });
                }
              } else {
                console.log('other', key, value);
              }

 */
              break;
          }
        }
        console.warn('step result', param);
      });
      resultList.push(param);
      console.groupEnd();
    }
    // console.log('****** result List', generatedItemsList);
    console.log('************************  end  *****************************');
    console.groupEnd();
    return resultList;
  }


  /**
   * Find Generated Items of Custom Value Type in Helper Map
   * @param {object} objectModel
   * @return {Array<*>|null} result
   */
  public findGeneratedHelper(objectModel: object): Array<any>|null {
    const keys = Object.keys(objectModel);
    const values = Object.values(objectModel);
    let helperName = null;
    const baseTypeEnum = Object.values(BasicTypeEnum)

    for (let i = 0; i < keys.length; i++) {
      if (!baseTypeEnum.some(val => val === values[i])) {
        helperName = values[i]
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this._helper.has(helperName) ? Object.values(this._helper.get(helperName)) : null;
      }
    }
    return null;
  }


  /** Private **/


  /**
   * Проверить является ли исследуемый тип кортежем (tuple)
   * !Важно: если рассматривать массивы в разрезе интерфейсов, то
   * можно сказать что любой массив в котором более одного элемента
   * (при этом первый элемент не должен быть объектом) является кортежем
   * @param {string|*} value
   * @return {boolean}
   */
  private isTuple(value: string|any[]): boolean {
    return Array.isArray(value) && value.length > 1 && !(value[0] instanceof Object);
  }

  /**
   *
   * @param {Array<*>} helper
   * @param {[string, *]} entry
   */
  private getGlobalValueForCurrentIteration(helper: any[]|null, entry: [string, any][]): any {
    if (helper) {
      entry.some(([, value]) => {
        if (this._helper.has(value) && helper && value === 'RoleEnum') {
          return helper[getRandomInt(0, helper.length)];
        }
      });
    }
    return null;
  }

  /**
   * Найти отметки @global для определения основного элемента для текущей итерации
   * @param {[string, *|Array<*>]} modelEntries
   * @return {{key: string, typeDef: *, marks: Array<*>}|null} result
   */
  private findGeneralEntry(modelEntries: [string, any|any[]][]): {key: string; typeDef: any; marks: string[]}|null {
    let result: { key: string; typeDef: any; marks: string[]}|null = null;
    modelEntries.some(([key, value]) => {
      const [typeDef, marks] = FileGeneratorService.getTypeAndMarks(value);
      if (marks && marks.includes('@general;')) {
        result = { key, typeDef, marks }
        return true;
      }
      return false
    });
    return result;
  }

  /**
   * Выбрать основной элемент для текущей итерации из списка хелперов
   * @param {{ key: string, typeDef: *, marks: string[]}|null} generalEntry
   */
  private getLocalValueForGeneralEntry(generalEntry: { key: string; typeDef: any; marks: string[]}|null): { key: string; value: any; marks: string[]}|null {
    if (!generalEntry || !this._helper.has(generalEntry.typeDef)) { return null; }
    const helper = Object.values(this._helper.get(generalEntry.typeDef));
    return {
      key: generalEntry.key,
      value: helper[getRandomInt(0, helper.length)],
      marks: generalEntry.marks
    };
  }

  /**
   * Возвратить первый элемент массива
   * Так как массив может быть задан: type[] | [{a:type}] | Array<T>
   * @param value
   */
  private getModelFormArray(value: string|any[]): string|any {
    let result;
    if (Array.isArray(value) && value.length === 1 && !this.isTuple(value)) { // Отделяем массивы указанные в [model] (если встречен кортеж(tuple), в нем будет более одного элемента) TODO: Обработать кортежи
      // eslint-disable-next-line prefer-destructuring
      result = value[0];
    } else if (typeof value === 'string' && value.search(/Array<|>/) !== -1) { // Тип указак как дженерик Array<T>
      result = value.replace(/Array<|>|\s/gu, '');
    } else if (typeof value === 'string' && value.includes('[]')) { // Тип указан как type[]
      result = value.replace(/\[]|\s/, '');
    } else {
      console.warn(value, 'of undefined');
      return null;
    }
    return result;
  }


  /**
   * Return flag that define if value compare with simple type array
   * @example any[], string[], number[], boolean[]
   * @param value
   */
  private static isBasicTypeArray(value: string|any[]): boolean {
    return typeof value === 'string' && Boolean(BasicTypeArrayEnum[value]);
  }

  private static isCustomTypeArray(value: string|any[]): boolean {
    return typeof value === 'string' && !this.isBasicTypeArray(value)
      && (value.includes('[]') || value.search(/Array<|>/) !== -1);
  }


  /**
   * Возвратить объявление типа. Так как в строке кроме объявления типа
   * могут присутствовать символы другого рода, то необходимо от них избавиться прежде чем переходить
   * к дальнейшим проверкам
   * @example value = string[] //multi line comment with number 1 2 3 -> string[]
   * @param value
   * @return {[string, string[]]|[*]}
   */
  private static getTypeAndMarks(value: string|any[]): [string, string[]]|any[] {
    if (typeof value === 'string') {
      return [value.replace(/(\s+)|\/\/(.+)/gu, ''), value.match(/@.*?;/gu)];
    }
    return [value, null];
  }

  private isEntryPresentedAsSetOfProperties(key: string, value: string|any[]): boolean {
    return Array.isArray(value) && !this._helper.has(key)
  }


  /**
   * Get Calculated Loop Count (If generated helper exist)
   * Or Get 10 as constant (if generated helper not exist)
   * @param {Object|null} generatedHelper
   * @return {number} loopCount
   */
  private static getLoopCount(generatedHelper: Array<any>|null): number {
    return generatedHelper && generatedHelper?.length ? Object.values(generatedHelper).length : 10;
  }


  /**
   * Generate an array of random items count from generated helper
   * @param {string} key - generated helper name
   * @return {Array} resultList
   */
  private generateArrayFromHelper(key: string): Array<any> {
    const generatedHelper = this._helper.get(key);
    const countOfItems = getRandomInt(1, generatedHelper.length);
    const itemList: Array<any> = []
    for (let n = 0; n <= countOfItems; n++) {
      const rand = getRandomInt(1, generatedHelper.length);
      if (!itemList.includes(generatedHelper[rand])) {
        itemList.push(generatedHelper[rand]);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return itemList;
  }


  private generateArrayFromType(type: string): Array<boolean|string|number|any> {
    const itemList: Array<boolean|string|number|any> = [];
    const values = this._helper.get(type);
    const countOfItems = getRandomInt(1, values.length);
    for (let n = 0; n <= countOfItems; n++) {
      const rand = getRandomInt(0, values.length - 1);
      if (!itemList.includes(values[rand])) {
        itemList.push(values[rand]);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return itemList;
  }
}
