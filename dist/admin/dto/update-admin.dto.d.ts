import { CreateAdminDto } from './create-admin.dto';
declare const UpdateAdminDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAdminDto>>;
export declare class UpdateAdminDto extends UpdateAdminDto_base {
    id: number;
    first_Name: string;
    last_Name: string;
    email: string;
    password_hashed: string;
    salt: string;
    phone_Num: number;
    createdAt: Date;
}
export {};
