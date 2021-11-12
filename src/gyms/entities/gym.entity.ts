import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gymName: string;

  @Column({ default: '' })
  imgUrl: string;

  @Column({ nullable: true, default: 0 })
  rating: number;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  fields: string;

  @Column({ default: 0 })
  price: number;

  @ManyToOne(() => User, (members: User) => members.gyms)
  public members: User;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ default: '' })
  latitude: string;

  @Column({ default: '' })
  longitude: string;
}
