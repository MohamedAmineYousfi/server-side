import { Entity, Column, PrimaryGeneratedColumn ,OneToMany} from 'typeorm';
import {Event} from '../../events/entities/event.entity'


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    first_name: string 

    @Column()
    last_name: string

    @Column()
    mobile_phone: Number

    @Column()
    email: string
    
    @Column()
    likes: Number

    @Column()
    comments: string 

    @Column()
    hashed_password: string 
    
    @Column()
    last_login: Date 

    @Column()
    registred_at: Date 

    @Column()
    events_joined: string 

    @Column()
    healthy_food_posted: string 
    
    @Column()
    healthy_food_liked: string

    @Column()
    public healthy_food: string 

    @Column()
    public gyms: string 

    @OneToMany(() => Event, (event: Event) => event.creator)
    public events: Event[];

    @Column()
    public event_joined_id: number

    @Column()
    public bmi: number

    @Column()
    public weight: number

    @Column()
    public height: number
}
