export interface BloodTypeModel {
  type: BloodTypeModel;
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
