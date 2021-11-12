import { CreateBlogDto } from './create-blog.dto';
declare const UpdateBlogDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBlogDto>>;
export declare class UpdateBlogDto extends UpdateBlogDto_base {
    id: number;
    user_name: number;
    blogTitle: string;
    imageUrl: string;
    content: string;
    date: Date;
    like: number;
}
export {};
