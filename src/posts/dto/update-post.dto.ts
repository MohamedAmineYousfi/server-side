import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  id: number;
  postTitle: string;
  created_at: Date;
  content: string;
  user_id: number;
  likes: number;
}
