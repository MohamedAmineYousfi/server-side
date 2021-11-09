import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Admin} from './entities/admin.entity'


@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private adminsRepository: Repository<Admin>) { }
  create(createAdminDto: CreateAdminDto) {
    return this.adminsRepository.save(createAdminDto);
  }

  findAll() {
    return this.adminsRepository.find();
  }

  findOne(id: number) {
    return this.adminsRepository.findOne(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminsRepository.update(id,updateAdminDto);
  }

  async remove(id: number): Promise<void> {
    await this.adminsRepository.delete(id) ;
  }
}
