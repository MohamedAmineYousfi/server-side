export class CreateRecipeDto {
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
