import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  id: number;
  user: string;
  created_at: Date;
  content: string;
  author: number;
  likes: number;
}
