import { CreateCoachDto } from './create-coach.dto';
import { User } from '../../user/entities/user.entity';
declare const UpdateCoachDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCoachDto>>;
export declare class UpdateCoachDto extends UpdateCoachDto_base {
    id: number;
    coachName: string;
    rating: number;
    price: number;
    description: string;
    adress: string;
    adherent: User[];
    phoneNumber: number;
    email: string;
    imageUrl: string;
}
export {};
