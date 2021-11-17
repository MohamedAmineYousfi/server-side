import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  postTitle: string;

  @Column()
  created_at: Date;

  @Column()
  content: string;

  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;

  @Column()
  likes: Number;
}
