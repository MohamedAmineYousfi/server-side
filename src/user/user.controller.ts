/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus
} from '@nestjs/common';

import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
var jwt = require('jsonwebtoken');
import { Response,response } from 'express';

@Controller('users')


export class UsersController {

  constructor(private  usersService: UsersService) {}


  @Post()
  async create(@Body() createUserDto: CreateUserDto , @Res() response:Response) {
  const res = await this.usersService.create(createUserDto);
    const token = jwt.sign(
      { user_id: res.id },
      process.env.TOKEN_KEY
    );}



  @Post('login')
  login(@Body() user: CreateUserDto, @Res() response:Response)  {
     console.log(user)
      var token = jwt.sign(
      {id:user.id,email:user.email},
      process.env.TOKEN_KEY
    )
        response.status(HttpStatus.CREATED)
        .json({Token:token})
      }


      @Get()
      findAll() {
        return this.usersService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
      }
    
      @Patch(':id')
      update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
      }




}

  


  



