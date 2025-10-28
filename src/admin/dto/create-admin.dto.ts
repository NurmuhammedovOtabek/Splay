import { roleAdmin } from "../entities/admin.entity";

export class CreateAdminDto {
  email: string;
  password: string;
  full_name: string;
  role: roleAdmin
}
