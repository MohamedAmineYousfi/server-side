import { PartialType } from '@nestjs/mapped-types';
import { CreateGymDto } from './create-gym.dto';



export class UpdateGymDto extends PartialType(CreateGymDto) {
    id: number;
    gymName: string;
    imgUrl: string;
    rating: number;
    description: string;
    fields: string;
    price: number;   
    members: number
   isAvailable: boolean;
   latitude :  string;
   longitude :  string;
}
