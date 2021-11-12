import { User } from '../../user/entities/user.entity';
export declare class Event {
    id: number;
    eventName: string;
    creator: User;
    adress: string;
    description: string;
    date: Date;
    created_at: Date;
    max_number: number;
    imageUrl: string;
}
