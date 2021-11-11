export class CreateBlogDto {
    user_id: number;
    blogTitle: string;
    imageUrl: string;
    content: string;
    date: Date;
    like: number;
}
