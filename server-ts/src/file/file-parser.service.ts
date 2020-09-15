import fs from 'fs';
import path from 'path';

export interface FileExportsModel {
  exports: string[],                  // Export class name list
  from: string                        // Path to declaration file
}
export interface FileImportModel {
  files: string[],
  from: string
}

export class FileParserService {
  public baseDirPath = '';

  constructor() {
  }

  /**
   * Из входной точки index.model.ts по списку export файлов,
   * прочитать все файлы в массив
   * @param {string} entryPointPath - ссылка на входную точку
   * @return {Promise} entryArray
   */
  public readAllExportedFilesFromEntryPoint (entryPointPath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const pathArray = entryPointPath.split('/');
      pathArray.splice(pathArray.length - 1, 1)
      this.baseDirPath = pathArray.join('/');
      const entryFileExports: FileExportsModel[] = []

      fs.readFile(entryPointPath, 'utf8', (err, data) => {
        if (err) { throw err; }
        this.getFileLinesArray(data).forEach((line, i) => {
          const parsedLine = line.replace('export ', '')
            .replace('from ', '')
            .replace(/['"]/gu, '')
            .split(' ');
          //console.log(parsedLine);
          entryFileExports.push({
            exports: parsedLine[0].split(','),
            from: this.resolvePath(parsedLine[parsedLine.length - 1], this.baseDirPath)
          })
          //console.log(`parsedLine: export ${entryFileExports[i].exports} from ${entryFileExports[i].from}`)
        })
        resolve(entryFileExports);
      });
    });
  }


  public parseModelFile(fileBody) {
    const importsSection: FileImportModel[] = [];
    let extendsSection = [];
    let objectName = 'Obj';
    let obj = {};
    let nestingArray:{[key: string]: any}[] = []
    let test: string[] = []
    fileBody.forEach( (line, i) => {
      const lineClass = new Line(line);

      if (line.isImportSection()) {
        importsSection.push(this.extractImport(line));
      }

      if (line.isObjectName()) {
        extendsSection = line.extractExtensibleFileList();
        objectName = line.extractObjectName();
        // Когда определен объект создаем под него структуру
        nestingArray.push({[objectName]: {}})
      }
      if (!line.isImportSection() && !line.isObjectName()) {
        if (!line.isEndOfModel()) {
          // Отделить объявление от типа
          let [key, value] = line.parseModelLine();

          // когда найдено внутреннее объявление =>
          // - увеличить показатель уровня вложенности
          if ( line.includes('{') ) {
            console.log('...line include \'{\' => nesting level increase. line:', line, 'nesting_array:', nestingArray)
            nestingArray.push({[key]: {}});
            console.log('...nesting++ nesting_array:', nestingArray);
          }
          // когда найдено закрытие внешнего объявления
          if ( line.includes('}') ) {
            console.log('...line include \'}\' => nesting level decrease:', line, 'nesting_array:', nestingArray)
            nestingArray.pop();
            console.log('...nesting-- nesting_array:', nestingArray);
          }

          // если уровень вложенности больше 0 то создать внутренний объект
          // если внутренний объект создан то добавить в него свойство
          nestingArray[nestingArray.length - 1][key] = value;

        } else {
          // Когда встречаем символ окончания объявления объекта,
          // то заносим все что записали в массив и очищаем промежуточные переменные
          nestingArray = []
          obj = {};
        }
      }

    });
    console.log('**************result*************')
    console.dirxml({[objectName]: {
        imports: importsSection,
        extends: extendsSection,
        [objectName]: {}
      }
    });
    console.log(fileBody);
    console.log('----------------------------------')


  }


  /**
   * Возвратить промис объект прочитанного файла
   * @param {string} path - путь к файлу
   * @return {Promise}
   */
  public readFilePromise(path: string): Promise<any> {
    return new Promise(resolve => {
      fs.readFile(path, 'utf8', (err, data) => {
        if(err) throw err;
        // console.log('read file', path)
        this.parseModelFile(this.getFileLinesArray(data));
        resolve({ [path]: this.getFileLinesArray(data) } );
      });
    });
  }



  /*** Private ***/


  private extractImport(line: string): FileImportModel {
    const fileMatchArray: RegExpMatchArray|null = line.match(/\{.+\}/);
    const pathMatchArray: RegExpMatchArray|null = line.match(/('|").+("|')/);

    const files = fileMatchArray && fileMatchArray.length
      ? fileMatchArray[0].slice(1, -1).replace(/' '/g, '').split(',') : []
    const path = pathMatchArray && pathMatchArray.length ? pathMatchArray[0].slice(1, -1) : 'undefined'

    return {
      files,
      from: this.resolvePath(this.baseDirPath, path)
    }
  }

  /**
   * Вычислить путь к файлу из массива
   * модуль path позволяет вычислить путь к файлу даже если путь к файлу указан абсолютно (../../fileName)
   * @param {string} filePath - имя файла
   * @param {string} baseDir - исходная директория
   * @return {string} путь к файлу
   */
  private resolvePath(filePath: string, baseDir: string): string {
    return path.join(baseDir, filePath) + '.ts';
  }


  /**
   * Прочитать все файлы указанные в блоке Imports базового файла
   * @param {string[]}files
   * @returns {Promise<string[]>}
   */
  private readChildFiles(files: FileExportsModel[]): Promise<string[]> {
    return new Promise((resolve) => {
      const promiseList: Promise<any>[] = [];
      files.forEach( (file: FileExportsModel) => {
        promiseList.push(this.readFilePromise(file.from))
      });
      Promise.all(promiseList).then(
        filesOutput => {
          // console.log(filesOutput);
          resolve(filesOutput)
        }
      );
    });
  }


  /**
   * Возвратить массив строк считанных из файла
   * @param {string} fileData
   * @return {[string]}
   */
  private getFileLinesArray(fileData: string): string[] {
    return fileData.replace(/;/g, '')
      .split('\r\n')
      .filter( a => a !== '');
  }

  private setDeepProperty(obj, path, key, value) {
    let curr = obj;
    for (let depth = 0; depth < path.length - 1; depth++) {
      curr = curr[path[depth]];
    }
    if (!key) { curr[path[path.length - 1]] = value }
    else {
      if( typeof curr[path[path.length - 1]] !== "object" ) {
        console.log('>>> key:', key,'current_object:', curr[path[path.length - 1]],'object_path:', path,'object:', obj)
      }

      if ( key in curr[path[path.length - 1]]) {
        path.push(key);
        this.setDeepProperty(obj, path, null, value);
      } else {
        Object.assign(curr[path[path.length - 1]],{[key]: value });
      }
    }
  }
}


/**
 * Строка Файла и операции над ними
 */
class Line {
  private readonly TYPES = ['interface', 'class', 'enum'];
  private readonly line: string;

  constructor(_line) {
    this.line = _line;
  }

  public parseModelLine(): string[]|undefined {
    if (!this.line) { return; }
    const a = this.line.split(':');
    const key = a[0].trim();
    a.splice(0,1);
    const value = a.join(':').trim();
    return [key, value]
  }

  public isObjectName(): boolean {
    return this.line.includes('export') && this.line.includes('{');
  }

  public isImportSection(): boolean {
    return this.line.includes('import') && this.line.includes('from')
  }

  public isEndOfModel(): boolean {
    return this.line === '}'
  }

  public extractObjectName(): string {
    return this.line.replace(/((export)*\s(class|interface|enum))|(extends.+)|\s/, '');
  }

  public extractExtensibleFileList(): string[]{
    return this.line.includes('extends')
      ? this.line.replace(/.+extends|\s|[{}]/gu, '').split(',')
      : [];
  }

  public extractObjectType(): string {
    const res = this.line.match(new RegExp(this.TYPES.join('|')));
    return res && res.length ? res[0] : '';
  }
}
