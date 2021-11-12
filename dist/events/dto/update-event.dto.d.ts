import { CreateEventDto } from './create-event.dto';
import { User } from '../../user/entities/user.entity';
declare const UpdateEventDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEventDto>>;
export declare class UpdateEventDto extends UpdateEventDto_base {
    id: number;
    eventName: string;
    creator: User;
    adress: string;
    description: string;
    date: Date;
    created_at: Date;
    max_number: number;
    imageUrl: string;
}
export {};
