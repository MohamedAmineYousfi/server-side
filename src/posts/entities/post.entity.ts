import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  postTitle: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  content: string;

  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;

  @Column({ default: 0 })
  likes: Number;
}
