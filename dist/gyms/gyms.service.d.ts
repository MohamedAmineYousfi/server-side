import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './entities/gym.entity';
import { Repository } from 'typeorm';
export declare class GymsService {
    private gymsRepository;
    constructor(gymsRepository: Repository<Gym>);
    create(createGymDto: CreateGymDto): Promise<CreateGymDto & Gym>;
    findAll(): Promise<Gym[]>;
    findOne(id: number): Promise<Gym>;
    update(id: number, updateGymDto: UpdateGymDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
