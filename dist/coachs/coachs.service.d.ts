import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
export declare class CoachsService {
    create(createCoachDto: CreateCoachDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCoachDto: UpdateCoachDto): string;
    remove(id: number): string;
}
