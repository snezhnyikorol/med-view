import { getRandomInt } from '../utils';

export class NameGenerator {
  private firstNameList = [
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
  ]
  private middleNameList = ['Александров','Алексеев','Анатольев','Андреев','Антонов','Аркадьев','Артемов','Бедросов','Богданов','Борисов','Валентинов','Валерьев', 'Васильев','Викторов','Витальев','Владимиров','Владиславов','Вольфов','Вячеславов','Геннадиев','Георгиев','Григорьев'];
  private lastNameList = ['Иванов','Смирнов','Кузнецов','Попов','Васильев','Петров','Соколов','Михайлов','Новиков','Федоров','Морозов','Волков','Алексеев','Лебедев','Семенов','Егоров','Павлов','Козлов','Степанов','Николаев','Орлов','Андреев','Макаров','Никитин','Захаров','Зайцев','Соловьев','Борисов','Яковлев','Григорьев','Романов','Воробьев','Сергеев','Кузьмин','Фролов','Александров','Дмитриев','Королев','Гусев','Киселев','Ильин','Максимов','Поляков'];

  /**
   * @return {[lastName, firstName, middleName]}
   */
  public getFullName(): [string, string, string] {
    const personName = this.firstNameList[getRandomInt(0, this.firstNameList.length)];
    return [
      this.lastNameList[getRandomInt(0, this.lastNameList.length)] + (this.isMale(personName) ? '' : 'а'),
      personName,
      this.middleNameList[getRandomInt(0, this.middleNameList.length)] + (this.isMale(personName) ? '' : 'на')
    ]
  }

  private isMale(firstName: string): boolean {
    const lastChar = firstName.slice(-1)
    return lastChar !== 'a' && lastChar !== 'я'
  }
}
