import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';
export declare class BlogsService {
    private blogsRepository;
    constructor(blogsRepository: Repository<Blog>);
    create(createBlogDto: CreateBlogDto): Promise<CreateBlogDto & Blog>;
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    update(id: number, updateBlogDto: UpdateBlogDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
