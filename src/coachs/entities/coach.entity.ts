import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Coach {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public coachName: string;

  @Column({ default: 0 })
  rating: number;

  @Column()
  public price: number;

  @Column()
  public description: string;

  @Column({ default: '' })
  public adress: string;

  @ManyToOne(() => User, (coachs: User) => coachs.coachs)
  public coachs: User;

  @Column()
  public phoneNumber: number;

  @Column()
  public email: string;

  @Column({ default: '' })
  public imageUrl: string;
}
