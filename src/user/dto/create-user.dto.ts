/* eslint-disable prettier/prettier */
import {Gym} from '../../gyms/entities/gym.entity'
import {Coach} from '../../coachs/entities/coach.entity'
import {Event} from '../../events/entities/event.entity'
export class CreateUserDto {
      

     id:number

     imageUrl: string

     age: number

     first_name: string 
 
     
     last_name: string
 
     
     phone_number: number
 
     
     email: string
     
 
     password: string 
     
     
     registred_at: Date 
 
 
     coachs: Coach[] 

     
     gyms: Gym[]

    
     events: Event[]
 
     
     bmi: number
 
     
     weight: number
 
     
     height: number


     adress : string 

 
 }
 