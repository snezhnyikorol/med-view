import { BasicTypeArrayEnum } from './basic-type-array.enum';
import fs from 'fs';
import { NameGenerator } from '../generators/name.generator';
import { LogColor, getRandomInt } from '../utils';
import { LoremGenerator } from '../generators/lorem.generator';
import { PhoneGenerator } from '../generators/phone.generator';


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
    const OUTPUT_DIR = './output/'
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

    console.log('{')
    console.group('a: ********************* START ********************')
    console.log((isFirstLevel ? 'First' : '') + ` generateMockFormObject of ${loopCount} items. isArray: `);
    console.log('\n\tModel');
    console.table(modelEntries);
    console.log('\n\tHelper');
    console.table(templateSource ? Object.entries(templateSource) : ['Helper not found'])
    console.log('\n\tGeneral Entry');
    console.table(generalEntry ? generalEntry : ['General Entry Not Found']);

    for (let i = 0; i < loopCount; i++) {
      const pivotal: { key: string; value: any; marks: string[]}|null = this.getLocalValueForGeneralEntry(generalEntry);
      console.groupCollapsed(`Iteration ${i + 1}, pivot: `, pivotal, templateSource);
      const param: any = {}
      modelEntries.forEach(([key, value]) => {
        const [typeDef, marks] = FileGeneratorService.getTypeAndMarks(value);
        // шаг 1. находим все типы с массивами => и приводим к единственному объекту, при этом помечаем как массив
        const [singleTypeDef, isArray] = this.getTypeDefinitionFromArrayOrGenerics(typeDef);
        console.log('*********************************************');
        console.log(LogColor.FgMagenta, 'STEP::',
          LogColor.FgYellow, 'key: ', LogColor.FgCyan, key,
          LogColor.FgYellow, '\n\tarray: ', LogColor.FgCyan, isArray,
          LogColor.FgYellow, '\n\ttype:', LogColor.FgCyan, singleTypeDef,
          LogColor.FgYellow, '\n\tmarks:', LogColor.FgCyan, marks,
          LogColor.Reset
        );
        if (this.isTuple(singleTypeDef)) {
          console.log('\x1b[44m%s\x1b[0m', 'is Tuple')
        }
        const preferredValuesList: any[] = this.extractPreferredValueListMark(marks);
        // шаг 2. начинаем анализ типов с последующим присвоением значений
          // шаг 2.1 Если указан список значений \'@values[a, b, ... , n];\' то использовать эти значения
        if (preferredValuesList && preferredValuesList.length) {
          const valueFromPreferredList = this.generateValues(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            [() => FileGeneratorService.getRandomValueFromList(preferredValuesList)], key, isArray);
          Object.assign(param, valueFromPreferredList);
        } else {
          // шаг 2.2 Если не указано иное из пункта 2.1, то пройти по списку типов и сгенерировать соответствующие значения
          switch (singleTypeDef) {
            case 'boolean':
              Object.assign(param, this.getRandomizedBooleanVariable(key, isArray));
              break;
            case 'number':
              Object.assign(param, this.getRandomizedNumberVariable(key, isArray, i));
              break;
            case 'string':
              Object.assign(param, this.getRandomizedStringVariable(key, pivotal, isArray, i));
              break;
            case 'any':
              Object.assign(param, this.getRandomizedAnyVariable(key, isArray));
              break;
            default:
              if (this.isTuple(singleTypeDef)) {
                Object.assign(param, this.getRandomizedTupleVariable(key, singleTypeDef, isArray))
              } else {
                console.log('/////', 1)
                if (!this._helper.has(singleTypeDef)) {
                  console.log('/////', 2)
                  // TODO: create new helper for custom type
                  console.log(
                    LogColor.FgMagenta, 'CUSTOM TYPE::', LogColor.FgYellow, key,
                    LogColor.FgMagenta, 'type model', LogColor.FgCyan, singleTypeDef,
                    LogColor.Reset
                  );
                  if (typeof singleTypeDef === 'object') {
                    console.log('1 **** For Object', LogColor.FgYellow, key, LogColor.Reset);
                    const temp = this.generateMockFormObjectModel(singleTypeDef, false);
                    this._helper.set(key, temp);
                  }
                  if (typeof singleTypeDef === 'string') {
                    console.log('2 **** For String', LogColor.FgYellow, key, LogColor.Reset);
                    if (!this._dataModel.has(singleTypeDef)) {
                      throw new Error(`model for key "${singleTypeDef}" not found`);
                    }
                    console.log(`generate helper [${key}] for `, singleTypeDef)
                    const temp = this.generateMockFormObjectModel(this._dataModel.get(singleTypeDef), false);
                    this._helper.set(key, temp);
                  }
                } else if (templateSource) {
                  this._helper.set(key, templateSource);
                } else if (pivotal && pivotal.key === key) {
                  Object.assign(param, { [key]: pivotal.value });
                }
                if (this._helper.has(key)) {
                  const a = this.generateArrayFromHelper(key);
                  console.log(a);
                  const result = isArray ? a : a[getRandomInt(0, a.length)]
                  Object.assign(param, { [key]: result });
                }
              }
              break;
          }
        }
      });
      resultList.push(param);
      console.groupEnd();
    }
    console.log('a: ************************  end  *****************************');
    console.groupEnd();
    console.log('}')
    return resultList;
  }


  /**
   * Find Generated Items of Custom Value Type in Helper Map
   * @param {object} objectModel
   * @return {Array<*>|null} result
   */
  public findGeneratedHelper(objectModel: any): Array<any>|null {
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
   * Generate a single or multiple values in case of array flag by use a value generators
   * @param {callback} generatorsList - list of value generator functions
   * @param {string} key - name of generated value
   * @param {boolean} isArray - singe or multiple value flag
   */
  private generateValues(generatorsList: any[],key: string, isArray: boolean): {[key:string]: any} {
    let stepValue = [];
    if (isArray) {
      const rLength = getRandomInt(0, 10);
      const arr: any[] = [];
      for (let i = 0; i < rLength; i++) {
        stepValue = [];
        generatorsList.forEach((generator: any) => {
          // @ts-ignore
          stepValue.push(generator())
        });
        arr.push(stepValue.length !== 1 ? stepValue : stepValue[0]);
      }
      return { [key]: arr };
    }
    generatorsList.forEach(generator => {
      // @ts-ignore
      stepValue.push(generator())
    });
    return { [key]: stepValue.length !== 1 ? stepValue : stepValue[0] }
  }

  /**
   * set value or value list to object
   * @param key
   * @param isArray
   */
  private getRandomizedNumberVariable(key: string, isArray: boolean, index: number): {[key:string]:number|number[]} {
    return this.generateValues([() => (key === 'id' ? index : getRandomInt(10000, 99999999))], key, isArray);
  }

  private getRandomizedBooleanVariable(key: string, isArray: boolean): {[key:string]:boolean|boolean[]} {
    return this.generateValues([() => Boolean(getRandomInt(0, 1))], key, isArray);
  }

  private getRandomizedAnyVariable(key: string, isArray: boolean): {[key: string]: any|any[]} {
    const generator = (): any => {
      const randomValueType = getRandomInt(0, 3);
      if (randomValueType === 0) {
        return Boolean(getRandomInt(0, 1))
      }
      if (randomValueType === 1) {
        return getRandomInt(10000, 99999999)
      }
      if (randomValueType === 2) {
        return new LoremGenerator().getLoremIpsum()
      }
      return { id: 1, ind: 2, name: 'Джорданий Йованович' }
    };

    return this.generateValues([generator], key, isArray)
  }

  private getRandomizedTupleVariable(key: string, tuple: any[], isArray: boolean): {[key:string]:any[]} {
    const generatorFuncList: any[] = [];
    let generatorFunc;
    tuple.forEach(item => {
        switch (item) {
          case 'boolean':
            // @ts-ignore
            generatorFunc = function () { return Boolean(getRandomInt(0, 1)); }
            break;
          case 'number':
            generatorFunc = function () { return getRandomInt(10000, 99999999); }
            break;
          case 'string':
            // @ts-ignore
            generatorFunc = function () { return new LoremGenerator().getLoremIpsum(); }
            break;
          case 'any':
            // @ts-ignore
            generatorFunc = function () {
              const randomValueType = getRandomInt(0, 3);
              if (randomValueType === 0) {
                return Boolean(getRandomInt(0, 1));
              }
              if (randomValueType === 1) {
                return getRandomInt(10000, 99999999);
              }
              if (randomValueType === 2) {
                return new LoremGenerator().getLoremIpsum();
              }
              return { id: 1, ind: 2, name: 'Джорданий Йованович' };
            }
            break;
          default:
            // TODO: (Custom Type): generate and use helper
            break;
        }
        generatorFuncList.push(generatorFunc);
      });

    return this.generateValues(generatorFuncList, key, isArray)
  }

  private getRandomizedStringVariable(key: string, pivot: any, isArray: boolean, index: number): {[key: string]: any} {
    let generator;
    const param = {}
    switch (key) {
        case 'id':
          generator = function () {
            return index;
          }
          break;
        case 'login':
        case 'password':
          generator = function () {
            return (pivot ? pivot.value.toLowerCase() : 'login') + '-' + index
          };
          break;
        case 'photo':
          generator = function () {
            return 'data:image/png;base64,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';
          }
          break;
        case 'birthday':
          generator = function () {
            return new Date(1979).toISOString();
          }
          break;
        case 'expirationDate':
          generator = function () {
            const now = new Date();
            return new Date(now.getFullYear(), getRandomInt(now.getMonth(), 14), getRandomInt(0, 31)).toISOString();
          }
          break;
        case 'startDate':
          generator = function () {
            const now = new Date();
            return new Date(now.getFullYear(), getRandomInt(0, now.getMonth()), getRandomInt(0, now.getDate())).toISOString();
          }
          break;
        case 'date':
        case 'finishDate':
        case 'endDate':
          generator = function () {
            return new Date().toISOString();
          }
          break;
        case 'firstName':
        case 'lastName':
        case 'middleName':
        case 'gender':
          generator = function () {
            return new NameGenerator().getFullName();
          }
          break;
        case 'phone':
          generator = function () {
            return new PhoneGenerator().getMobilePhone();
          }
          break;
        case 'email':
          generator = function () {
            return 'example@example.com';
          };
          break
        default:
          generator = function () {
            return new LoremGenerator().getLoremIpsum();
          }
          break
      }

    if (this.isFullNameOrGender(key)) {
      const a = this.generateValues([() => this.getFullNameAndGender(generator)], key, isArray)
      const values = Object.values(a);
      values.forEach((valueGroup: {firstName: string; lastName: string; middleName: string; gender: string}) => {
        for (const aKey in valueGroup) {
          Object.assign(param, { [aKey]: valueGroup[aKey] });
        }
      });
      return param;
    }
    return this.generateValues([generator], key, isArray);
  }

  /**
   * Extract list of preferred values form marks list.
   * Preferred Values Should Be marked as '@values[...];' in comments
   * @example:
   *  name: \'string; //... @values['John', 'David', 'Sally']; ...\'
   *  -> will be parsed and pushed to mark list as marks = [ \'@values['John', 'David', 'Sally'];\' ]
   *  -> current function returns an array of [ 'John', 'David', 'Sally' ]
   * @param {Array<*>} marks
   * @returns {Array<*>} list of preferred values or empty list
   */
  private extractPreferredValueListMark(marks: any[]): any[] {
      if (!marks) { return []; }
      const valueMarks: string = marks.find(mark => typeof mark === 'string' && mark.includes('@values'))
      if (valueMarks) {
        const arr = valueMarks.replace(/@values\[|\]|'|"|;/gu, '').split(',');
        return arr.map(item => (typeof item === 'string' ? item.trim() : item));
      }
      return []
  }


  /**
   * Get Random Value From List
   * @param {Array<*>} itemList
   * @returns {*} item
   */
  private static getRandomValueFromList(itemList: any[]): any {
    if (!itemList) { return ''; }
    const randomInd = getRandomInt(0, itemList.length);
    return itemList[randomInd];
  }

  private isFullNameOrGender(key): boolean {
    return key === 'firstName' || key === 'lastName' || key === 'middleName' || key === 'gender'
  }

  private getFullNameAndGender(generatorFunc: any): any {
    const result = {}
    const [lastName, firstName, middleName]: [string, string, string] = generatorFunc();
    const gender = new NameGenerator().isMale(firstName) ? 'Мужской' : 'Женский'
    Object.assign(result, { firstName });
    Object.assign(result, { lastName });
    Object.assign(result, { middleName });
    Object.assign(result, { gender });
    return result;
  }

  /**
   * Возвратить описание модели и флаг массива из массива заданного как дженерик \'Array<T>\'
   * либо как строка \'TypeDefinition[]\',
   * либо как кортеж (Tuple) \'[type, type, ..., type]\', а так же вернуть исходное
   * описание модели если оно не заданно как массив
   * @param {string|object[]} typeDefinition
   * @return {[string|*, boolean]} где первый параметр - описание модели а второй - является ли переданное значение массивом
   */
  private getTypeDefinitionFromArrayOrGenerics(typeDefinition: string|any[]): [string|any, boolean] {
    if (Array.isArray(typeDefinition) && !this.isTuple(typeDefinition) || FileGeneratorService.isCustomTypeArray(typeDefinition)) {
      return [ this.getModelFormArray(typeDefinition), true ];
    }
    return [ typeDefinition, false ];
  }


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
    let generatedHelper = this._helper.get(key);
    if (generatedHelper && !Array.isArray(generatedHelper)) {
      generatedHelper = Object.values(generatedHelper);
    }
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
}
