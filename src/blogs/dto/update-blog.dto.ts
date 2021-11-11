import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    id: number;
    user_name: number;
    blogTitle: string;
    imageUrl: string;
    content: string;
    date: Date;
    like: number;
}
