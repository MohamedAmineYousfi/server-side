import { PartialType } from '@nestjs/mapped-types';
import { CreateCoachDto } from './create-coach.dto';

export class UpdateCoachDto extends PartialType(CreateCoachDto) {
    id: number;
    coachName: string; 
    rating: number; 
    price: number;
    description: string;
    adress: string; 
    members : number; 
    phoneNumber : number; 
    email : string; 
    imageUrl : string;
}
