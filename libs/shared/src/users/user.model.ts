import { RoleModel } from './role.model';

export class UserModel {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  roles: RoleModel[];
}
