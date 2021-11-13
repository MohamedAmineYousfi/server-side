import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
  id: number;

  rest_name: string;

  food_name: string;

  rating: number;

  ingredients: string;

  price: number;

  img_Url: string;

  supp: string;

  longitude: string;

  latitude: string;
}
