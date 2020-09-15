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
exports.FileParserService = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var FileParserService = (function () {
    function FileParserService() {
        this.baseDirPath = '';
    }
    FileParserService.prototype.readAllExportedFilesFromEntryPoint = function (entryPointPath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var pathArray = entryPointPath.split('/');
            pathArray.splice(pathArray.length - 1, 1);
            _this.baseDirPath = pathArray.join('/');
            var entryFileExports = [];
            fs_1.default.readFile(entryPointPath, 'utf8', function (err, data) {
                if (err) {
                    throw err;
                }
                _this.getFileLinesArray(data).forEach(function (line, i) {
                    var parsedLine = line.replace('export ', '')
                        .replace('from ', '')
                        .replace(/['"]/gu, '')
                        .split(' ');
                    entryFileExports.push({
                        exports: parsedLine[0].split(','),
                        from: _this.resolvePath(parsedLine[parsedLine.length - 1], _this.baseDirPath)
                    });
                });
                resolve(entryFileExports);
            });
        });
    };
    FileParserService.prototype.parseModelFile = function (fileBody) {
        var _a, _b;
        var _this = this;
        var importsSection = [];
        var extendsSection = [];
        var objectName = 'Obj';
        var obj = {};
        var nestingArray = [];
        var test = [];
        fileBody.forEach(function (line, i) {
            var _a, _b;
            var lineClass = new Line(line);
            if (line.isImportSection()) {
                importsSection.push(_this.extractImport(line));
            }
            if (line.isObjectName()) {
                extendsSection = line.extractExtensibleFileList();
                objectName = line.extractObjectName();
                nestingArray.push((_a = {}, _a[objectName] = {}, _a));
            }
            if (!line.isImportSection() && !line.isObjectName()) {
                if (!line.isEndOfModel()) {
                    var _c = __read(line.parseModelLine(), 2), key = _c[0], value = _c[1];
                    if (line.includes('{')) {
                        console.log('...line include \'{\' => nesting level increase. line:', line, 'nesting_array:', nestingArray);
                        nestingArray.push((_b = {}, _b[key] = {}, _b));
                        console.log('...nesting++ nesting_array:', nestingArray);
                    }
                    if (line.includes('}')) {
                        console.log('...line include \'}\' => nesting level decrease:', line, 'nesting_array:', nestingArray);
                        nestingArray.pop();
                        console.log('...nesting-- nesting_array:', nestingArray);
                    }
                    nestingArray[nestingArray.length - 1][key] = value;
                }
                else {
                    nestingArray = [];
                    obj = {};
                }
            }
        });
        console.log('**************result*************');
        console.dirxml((_a = {}, _a[objectName] = (_b = {
                imports: importsSection,
                extends: extendsSection
            },
            _b[objectName] = {},
            _b), _a));
        console.log(fileBody);
        console.log('----------------------------------');
    };
    FileParserService.prototype.readFilePromise = function (path) {
        var _this = this;
        return new Promise(function (resolve) {
            fs_1.default.readFile(path, 'utf8', function (err, data) {
                var _a;
                if (err)
                    throw err;
                _this.parseModelFile(_this.getFileLinesArray(data));
                resolve((_a = {}, _a[path] = _this.getFileLinesArray(data), _a));
            });
        });
    };
    FileParserService.prototype.extractImport = function (line) {
        var fileMatchArray = line.match(/\{.+\}/);
        var pathMatchArray = line.match(/('|").+("|')/);
        var files = fileMatchArray && fileMatchArray.length
            ? fileMatchArray[0].slice(1, -1).replace(/' '/g, '').split(',') : [];
        var path = pathMatchArray && pathMatchArray.length ? pathMatchArray[0].slice(1, -1) : 'undefined';
        return {
            files: files,
            from: this.resolvePath(this.baseDirPath, path)
        };
    };
    FileParserService.prototype.resolvePath = function (filePath, baseDir) {
        return path_1.default.join(baseDir, filePath) + '.ts';
    };
    FileParserService.prototype.readChildFiles = function (files) {
        var _this = this;
        return new Promise(function (resolve) {
            var promiseList = [];
            files.forEach(function (file) {
                promiseList.push(_this.readFilePromise(file.from));
            });
            Promise.all(promiseList).then(function (filesOutput) {
                resolve(filesOutput);
            });
        });
    };
    FileParserService.prototype.getFileLinesArray = function (fileData) {
        return fileData.replace(/;/g, '')
            .split('\r\n')
            .filter(function (a) { return a !== ''; });
    };
    FileParserService.prototype.setDeepProperty = function (obj, path, key, value) {
        var _a;
        var curr = obj;
        for (var depth = 0; depth < path.length - 1; depth++) {
            curr = curr[path[depth]];
        }
        if (!key) {
            curr[path[path.length - 1]] = value;
        }
        else {
            if (typeof curr[path[path.length - 1]] !== "object") {
                console.log('>>> key:', key, 'current_object:', curr[path[path.length - 1]], 'object_path:', path, 'object:', obj);
            }
            if (key in curr[path[path.length - 1]]) {
                path.push(key);
                this.setDeepProperty(obj, path, null, value);
            }
            else {
                Object.assign(curr[path[path.length - 1]], (_a = {}, _a[key] = value, _a));
            }
        }
    };
    return FileParserService;
}());
exports.FileParserService = FileParserService;
var Line = (function () {
    function Line(_line) {
        this.TYPES = ['interface', 'class', 'enum'];
        this.line = _line;
    }
    Line.prototype.parseModelLine = function () {
        if (!this.line) {
            return;
        }
        var a = this.line.split(':');
        var key = a[0].trim();
        a.splice(0, 1);
        var value = a.join(':').trim();
        return [key, value];
    };
    Line.prototype.isObjectName = function () {
        return this.line.includes('export') && this.line.includes('{');
    };
    Line.prototype.isImportSection = function () {
        return this.line.includes('import') && this.line.includes('from');
    };
    Line.prototype.isEndOfModel = function () {
        return this.line === '}';
    };
    Line.prototype.extractObjectName = function () {
        return this.line.replace(/((export)*\s(class|interface|enum))|(extends.+)|\s/, '');
    };
    Line.prototype.extractExtensibleFileList = function () {
        return this.line.includes('extends')
            ? this.line.replace(/.+extends|\s|[{}]/gu, '').split(',')
            : [];
    };
    Line.prototype.extractObjectType = function () {
        var res = this.line.match(new RegExp(this.TYPES.join('|')));
        return res && res.length ? res[0] : '';
    };
    return Line;
}());
//# sourceMappingURL=file-parser.service.js.map