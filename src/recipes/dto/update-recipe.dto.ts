import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
    id: number;
    RecipeTitle: string 
    created_at: Date
    content: string 
    likes: number
    imageUrl : string
    Kcal : number 
    fat : number 
    carb : number
    saturates : number 
    sugar : number 
    fibre : number 
    protein : number 
    salt :number
    ingredients : string 
    methodes : string
}

