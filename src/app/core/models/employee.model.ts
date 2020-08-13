import {PersonGeneralInfoModel} from "./person-general-info.model";
import {PermissionModel} from "./permission.model";
import {AddressModel} from "./address.model";

export interface EmployeeModel extends PersonGeneralInfoModel {
  position: string;                     //Должность
  permissionList: PermissionModel[];
  department: {
    name: string;
    address: AddressModel
  }
  skills: {
    academicDegree: string[];           //Ученая степень
    qualification: string;
    category: string;                   //? Категория
  }
}
