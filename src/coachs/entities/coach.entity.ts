import { Entity, Column, PrimaryGeneratedColumn ,ManyToOne} from 'typeorm';
import {User} from '../../user/entities/user.entity'


@Entity()
export class Coach {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    coachName: string; 

    @Column()
    rating: Number; 

    @Column()
    price: Number;

    @Column()
    description: string;
  
    @Column()
    adress: string; 

    @ManyToOne(() => User, (members: User) => members.coachs)
    public members: User;
  
    @Column()
    phoneNumber : Number; 

    @Column()
    email : string; 

    @Column()
    imageUrl : string;
}
