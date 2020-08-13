import {PermissionModel} from "./permission.model";

export interface UserModel {
  id: number;
  name: string;
  permissionList: PermissionModel[];
}
