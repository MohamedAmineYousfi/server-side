import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
export declare class GymsController {
    private readonly gymsService;
    constructor(gymsService: GymsService);
    create(createGymDto: CreateGymDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGymDto: UpdateGymDto): string;
    remove(id: string): string;
}
