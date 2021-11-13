import { PartialType } from '@nestjs/mapped-types';
import { CreateCoachDto } from './create-coach.dto';
import { User } from '../../user/entities/user.entity';

export class UpdateCoachDto extends PartialType(CreateCoachDto) {
  id: number;
  coachName: string;
  rating: number;
  price: number;
  description: string;
  adress: string;
  coachs: User;
  phoneNumber: number;
  email: string;
  imageUrl: string;
}
