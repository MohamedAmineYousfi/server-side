import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import {User} from '../../user/entities/user.entity'

@Entity()
export class Gym {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gymName: string;

    @Column()
    imgUrl: string;

    @Column({nullable:true,default:0})
    rating: number;

    @Column()
    description: string;

    @Column()
    fields: string;

    @Column()
    price: number;

    @ManyToOne(() => User, (members: User) => members.gyms)
    public members: User;

    @Column()
    isAvailable: boolean;
 
    @Column()
    latitude :  string;

    @Column()
    longitude :  string;


}
