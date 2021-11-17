export class CreatePostDto {
  postTitle: string;
  created_at: Date;
  content: string;
  user_id: number;
  likes: number;
}
