/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Gym } from '../../gyms/entities/gym.entity';
import { Event } from '../../events/entities/event.entity';
import { Coach } from '../../coachs/entities/coach.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;

  imageUrl: string;

  age: number;

  first_name: string;

  last_name: string;

  phone_number: number;

  email: string;

  password: string;

  registred_at: Date;

  gyms: Gym[];

  coachs: Coach[];

  events: Event[];

  bmi: number;

  weight: number;

  height: number;

  adress: string;
}
