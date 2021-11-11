import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
    id: number;
    eventName: string; 
    user_id: number; 
    adress: string;
    description: string;
    date: Date;  
    created_at : Date; 
    max_number: number;
}
