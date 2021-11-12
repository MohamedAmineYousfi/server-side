import { Event } from '../../events/entities/event.entity';
import { Gym } from '../../gyms/entities/gym.entity';
import { Coach } from '../../coachs/entities/coach.entity';
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: number;
    email: string;
    password: string;
    registred_at: Date;
    gyms: Gym[];
    events: Event[];
    coachs: Coach[];
    bmi: number;
    weight: number;
    height: number;
    age: number;
    imageUrl: string;
    adress: string;
    static email: string;
    static password: string;
}
