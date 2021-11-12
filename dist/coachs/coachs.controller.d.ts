import { CoachsService } from './coachs.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
export declare class CoachsController {
    private readonly coachsService;
    constructor(coachsService: CoachsService);
    create(createCoachDto: CreateCoachDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCoachDto: UpdateCoachDto): string;
    remove(id: string): string;
}
