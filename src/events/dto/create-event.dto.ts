/* eslint-disable prettier/prettier */
import {User} from '../../user/entities/user.entity'

export  class CreateEventDto {
    eventName: string; 
    creator: User; 
    adress: string;
    description: string;
    date: Date;  
    created_at : Date; 
    max_number: number;
}
