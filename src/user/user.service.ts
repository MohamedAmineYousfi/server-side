import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth/auth.service';
import {Observable, from ,  throwError} from 'rxjs'
import {switchMap, catchError, map} from 'rxjs/operators';

@Injectable()



export class UsersService {
 

constructor(@InjectRepository(User) private usersRepository: Repository<User>,
   private authService: AuthService) {}




create(user: CreateUserDto) {
    return  this.authService.hashPassword(User.password).pipe(
      switchMap((passwordHash:string)=> {
        const newUser = new User();
        newUser.email= User.email
        newUser.password= passwordHash
        return  from( this.usersRepository.save(newUser)).pipe(
          map((user:CreateUserDto)=> {
            const {password, ...result} = user;
          }),
          catchError(err => throwError(err))
        );
      })
    )
  }






findAll(): Observable<CreateUserDto[]> {
    return from(this.usersRepository.find()).pipe(
      map((users:CreateUserDto[]) => {
          users.forEach(function (v) {delete v.password});
          return users;
      })
  );
}






  findOne(id: number) {
    return from(this.usersRepository.findOne({id})).pipe(
      map((user:CreateUserDto) => {
       const {password, ...result} = user;
       return result
      })
    )
  }



  
 login(user:CreateUserDto){

  return this.validateUser(user.email, user.password).pipe(
    switchMap((user:CreateUserDto) => {
        if(user) {
            return this.authService.generateJWT(user).pipe(map((jwt: string) => jwt));
        } else {
            return 'Wrong Credentials';
        }
    })
  )
}






 validateUser(email:string, password:string){
  return  from(this.usersRepository.findOne({email}, {select: ['id', 'password',  'email']})).pipe(
    switchMap((user:CreateUserDto) => this.authService.comparePasswords(password, user.password).pipe(
        map((match: boolean) => {
            if(match) {
                const {password, ...result} = user;
                return result;
            } else {
                throw Error;
            }
        })
    ))
  )
 }

 






  update(id: number, updateUserDto: UpdateUserDto) {
    this.usersRepository.update(id,updateUserDto);
  }



  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id) ;
    }
}
