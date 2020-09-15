import { getRandomInt } from '../utils';

export class PhoneGenerator {
  private countryCode = '+375';
  private operatorCode = [25, 29, 33, 44];

  public getMobilePhone(): string {
    return this.countryCode + this.operatorCode[getRandomInt(0, this.operatorCode.length)] + getRandomInt(1000000, 9999999);
  }

  public getStationaryPhone(): string {
    return this.countryCode + '17' + getRandomInt(1000000, 9999999);
  }
}
