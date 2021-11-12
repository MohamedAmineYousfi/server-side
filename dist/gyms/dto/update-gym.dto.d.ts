import { CreateGymDto } from './create-gym.dto';
import { User } from '../../user/entities/user.entity';
declare const UpdateGymDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateGymDto>>;
export declare class UpdateGymDto extends UpdateGymDto_base {
    id: number;
    gymName: string;
    imgUrl: string;
    rating: number;
    description: string;
    fields: string;
    price: number;
    members: User;
    isAvailable: boolean;
    latitude: string;
    longitude: string;
}
export {};
