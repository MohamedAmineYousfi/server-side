/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
  id: number;
  recipeTitle: string;
  created_at: Date;
  likes: number;
  imageUrl: string;
  kcal: number;
  fat: number;
  carb: number;
  saturates: number;
  sugar: number;
  fibre: number;
  protein: number;
  salt: number;
  ingredients: string;
  methodes: string;
}

