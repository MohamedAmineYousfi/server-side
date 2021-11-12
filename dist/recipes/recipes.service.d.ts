import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';
export declare class RecipesService {
    private recipesRepository;
    constructor(recipesRepository: Repository<Recipe>);
    create(createRecipeDto: CreateRecipeDto): Promise<CreateRecipeDto & Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: number): Promise<Recipe>;
    update(id: number, updateRecipeDto: UpdateRecipeDto): void;
    remove(id: number): Promise<void>;
}
