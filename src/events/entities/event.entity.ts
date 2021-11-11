import { Column, Entity, JoinColumn,ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {User} from '../../user/entities/user.entity'

@Entity()

export class Event {

    @PrimaryGeneratedColumn()
    public  id: number;

    @Column()
    public eventName: string; 

    @ManyToOne(() => User, (creator: User) => creator.events)
    public creator: User;

    @Column()
    public adress: string;

    @Column()
    public description: string;
  
    @Column()
    public date: Date; 

    @Column({type :'timestamp' ,default: ()=>'CURRENT_TIMESTAMP'})
    public created_at : Date; 

    @Column({default : 1})
    public max_number : number; 
    

}
