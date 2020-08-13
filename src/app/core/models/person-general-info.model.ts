import {TagModel} from "./tag.model";
import {AddressModel} from "./address.model";
import {ContactModel} from "./contact.model";

export interface PersonGeneralInfoModel {
  id: number;
  photo: string;                //image in Base64 format?
  firstName: string;
  middleName: string;
  lastName: string;
  birthday: string;             // Date in ISO format поом объясню почему
  gender:string;
  tags: TagModel[];
  maritalStatus: string;        //Семейное положение
  contact: ContactModel
  address: {
    registration: AddressModel;
    actual: AddressModel;
  }
}
