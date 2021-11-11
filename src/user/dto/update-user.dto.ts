import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {Gym} from '../../gyms/entities/gym.entity'
import {Event} from '../../events/entities/event.entity'
import {Coach} from '../../coachs/entities/coach.entity'

export class UpdateUserDto extends PartialType(CreateUserDto) {
 
    id: number;

    
    first_name: string 

    
    last_name: string

    
    mobile_phone: number

    
    email: string
    
    
    likes: number

    
    comments: string 

    
    hashed_password: string 
    
    
    last_login: Date 

    
    registred_at: Date 


    
    gyms: Gym[] 
 
     
    members: Coach[]

   
    creator: Event[]

    
    bmi: number

    
    weight: number

    
    height: number



}

