export interface BloodTypeModel {
  type: BloodTypeEnum;
  rhFactor: RhesusFactor;
}

export enum BloodTypeEnum {
  O = 'I',
  A = 'II',
  B = 'III',
  AB = 'IV',
}

export enum RhesusFactor {
  POSITIVE = '+',
  NEGATIVE = '-'
}
