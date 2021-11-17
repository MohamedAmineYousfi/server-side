export class CreatePostDto {
  postTitle: string;
  user: string;
  created_at: Date;
  content: string;
  author: number;
  likes: number;
}
