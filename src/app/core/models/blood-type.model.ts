export interface BloodTypeModel {
  type: BloodTypeEnum;
  rhFactor: RhesusFactorEnum;
}

export enum BloodTypeEnum {
  O = 'I',
  A = 'II',
  B = 'III',
  AB = 'IV',
}

export enum RhesusFactorEnum {
  POSITIVE = '+',
  NEGATIVE = '-'
}
