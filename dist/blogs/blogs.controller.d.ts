import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    create(createBlogDto: CreateBlogDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBlogDto: UpdateBlogDto): string;
    remove(id: string): string;
}
