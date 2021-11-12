import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto} from '../../user/dto/create-user.dto';
import {Observable, from , of} from 'rxjs'
  const bcrypt = require('bcrypt')
//  import bcrypt from "bcrypt"
@Injectable()
export class AuthService {
 constructor(private readonly jwtService: JwtService){}
 generateJWT(user: CreateUserDto): Observable <string> {
   return from(this.jwtService.signAsync({user}))
 }


 

hashPassword(password:string):  Observable <string> {
return from<string>( bcrypt.hash(password, 12))
 }

 comparePasswords(newPassword:string,passwordHash: string): Observable <any>{
return of<any | boolean>(bcrypt.compare(newPassword, passwordHash))
 }

}

