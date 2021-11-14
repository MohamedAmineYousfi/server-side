import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Event } from '../../events/entities/event.entity';
import { Gym } from '../../gyms/entities/gym.entity';
import { Coach } from '../../coachs/entities/coach.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public first_name: string;

  @Column()
  public last_name: string;

  @Column({ default: 0 })
  public phone_number: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public registred_at: Date;

  @OneToMany(() => Gym, (gym: Gym) => gym.members)
  public gyms: Gym[];

  @OneToMany(() => Event, (event: Event) => event.creator)
  public events: Event[];

  @OneToMany(() => Coach, (coach: Coach) => coach.coachs)
  public coachs: Coach[];

  @Column({ nullable: true })
  public bmi: number;

  @Column({ default: 0 })
  public weight: number;

  @Column({ default: 0 })
  public height: number;

  @Column({ default: 0 })
  public age: number;

  @Column({ nullable: true, default: '' })
  public imageUrl: string;

  @Column({ nullable: true, default: '' })
  public adress: string;
}
