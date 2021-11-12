import { CreateUserDto } from './create-user.dto';
import { Gym } from '../../gyms/entities/gym.entity';
import { Event } from '../../events/entities/event.entity';
import { Coach } from '../../coachs/entities/coach.entity';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    id: number;
    first_name: string;
    last_name: string;
    mobile_phone: number;
    email: string;
    likes: number;
    hashed_password: string;
    last_login: Date;
    registred_at: Date;
    gyms: Gym[];
    coachs: Coach[];
    events: Event[];
    bmi: number;
    weight: number;
    height: number;
    adress: string;
}
export {};
