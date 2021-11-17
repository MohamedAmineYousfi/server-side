import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public created_at: Date;

  @Column()
  public content: string;

  @Column()
  public user: string;

  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;

  @Column({ default: 0 })
  public likes: Number;
}
