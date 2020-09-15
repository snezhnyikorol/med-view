"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameGenerator = void 0;
var utils_1 = require("../utils");
var NameGenerator = (function () {
    function NameGenerator() {
        this.firstNameList = [
            'Архип',
            'Александр',
            'Алексей',
            'Анатолий',
            'Альберт',
            'Акакий',
            'Аркадий',
            'Анна',
            'Агнесса',
            'Алина',
            'Алла',
            'Виткор',
            'Владислав',
            'Владимир',
            'Василиса',
            'Виталина',
            'Егор',
            'Петр',
            'Ибрагим'
        ];
        this.middleNameList = ['Александров', 'Алексеев', 'Анатольев', 'Андреев', 'Антонов', 'Аркадьев', 'Артемов', 'Бедросов', 'Богданов', 'Борисов', 'Валентинов', 'Валерьев', 'Васильев', 'Викторов', 'Витальев', 'Владимиров', 'Владиславов', 'Вольфов', 'Вячеславов', 'Геннадиев', 'Георгиев', 'Григорьев'];
        this.lastNameList = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Федоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семенов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Зайцев', 'Соловьев', 'Борисов', 'Яковлев', 'Григорьев', 'Романов', 'Воробьев', 'Сергеев', 'Кузьмин', 'Фролов', 'Александров', 'Дмитриев', 'Королев', 'Гусев', 'Киселев', 'Ильин', 'Максимов', 'Поляков'];
    }
    NameGenerator.prototype.getFullName = function () {
        var personName = this.firstNameList[utils_1.getRandomInt(0, this.firstNameList.length)];
        return [
            this.lastNameList[utils_1.getRandomInt(0, this.lastNameList.length)] + (this.isMale(personName) ? '' : 'а'),
            personName,
            this.middleNameList[utils_1.getRandomInt(0, this.middleNameList.length)] + (this.isMale(personName) ? '' : 'на')
        ];
    };
    NameGenerator.prototype.isMale = function (firstName) {
        var lastChar = firstName.slice(-1);
        return lastChar !== 'a' && lastChar !== 'я';
    };
    return NameGenerator;
}());
exports.NameGenerator = NameGenerator;
//# sourceMappingURL=name.generator.js.map