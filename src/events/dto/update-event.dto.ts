import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import {User} from '../../user/entities/user.entity'
export  class UpdateEventDto extends PartialType(CreateEventDto) {
    id: number;
    eventName: string; 
    creator: User; 
    adress: string;
    description: string;
    date: Date;  
    created_at : Date; 
    max_number: number;
}
