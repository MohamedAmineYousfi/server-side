import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
    id: number;
    first_Name: string;
    last_Name: string;
    email: string;
    password_hashed: string;
    salt:string;
    phone_Num: number;
    createdAt: Date;
}
