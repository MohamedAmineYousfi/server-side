import {Gym} from '../../gyms/entities/gym.entity'
import {Coach} from '../../coachs/entities/coach.entity'
import {Event} from '../../events/entities/event.entity'
export class CreateUserDto {
  
     first_name: string 
 
     
     last_name: string
 
     
     phone_number: number
 
     
     email: string
     
     
     likes: number
 
     
     password: string 
     
     
     last_login: Date 
 
     
     registred_at: Date 
 
 
     adherent: Coach[] 

     
     members: Gym[]

    
     creator: Event[]
 
     
     bmi: number
 
     
     weight: number
 
     
     height: number
 
 }
 