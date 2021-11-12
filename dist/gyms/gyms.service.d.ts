import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
export declare class GymsService {
    create(createGymDto: CreateGymDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGymDto: UpdateGymDto): string;
    remove(id: number): string;
}
