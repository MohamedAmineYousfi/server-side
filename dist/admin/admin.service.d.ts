import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
export declare class AdminService {
    private adminsRepository;
    constructor(adminsRepository: Repository<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<CreateAdminDto & Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
