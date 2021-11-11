import {Gym} from '../../gyms/entities/gym.entity'
import {Coach} from '../../coachs/entities/coach.entity'
import {Event} from '../../events/entities/event.entity'
export class CreateUserDto {
  
     first_name: string 
 
     
     last_name: string
 
     
     phone_number: number
 
     
     email: string
     
 
     
     password: string 
     
     
     last_login: Date 
 
     
     registred_at: Date 
 
 
     coachs: Coach[] 

     
     gyms: Gym[]

    
     events: Event[]
 
     
     bmi: number
 
     
     weight: number
 
     
     height: number
 
 }
 