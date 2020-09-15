import {AddressModel} from "./address.model";
import {BloodTypeModel} from "./blood-type.model";
import {ChronicDiseaseModel} from "./chronic-disease.model";
import {AllergyModel} from "./allergy.model";
import {ContactModel} from "./contact.model";
import {PersonGeneralInfoModel} from "./person-general-info.model";

export interface CustomerModel extends PersonGeneralInfoModel {
  identityDocument: {           //идентификационный документ
    type: string;               //Паспорт у нас а у каких нибудь арабов ID карта вместо него
    number: string;
    issueDate: string;
    expirationDate: string;     //На это можно завязать нотификашку что надо обновить данные
    attachment: File;
  };
  parentContactList: {          //Нахуа, может назвать экстренные контакты?
    firstName: string;
    middleName: string;
    lastName: string;
    phone: string[];
    mobile: {
      phone: string;
      note: string;
    }[];
  }[];
  note: string;
  medicalCard: {
    bloodType: BloodTypeModel;
    chronicDiseaseList: ChronicDiseaseModel[];
    allergyList: AllergyModel[];
  }
  paymentInfo: {
    insuranceCompany: {
      name: string;
      address: AddressModel;
      contact: ContactModel;
    }
  }

}
