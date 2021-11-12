import { CreateRecipeDto } from './create-recipe.dto';
declare const UpdateRecipeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRecipeDto>>;
export declare class UpdateRecipeDto extends UpdateRecipeDto_base {
    id: number;
    recipeTitle: string;
    created_at: Date;
    content: string;
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
export {};
