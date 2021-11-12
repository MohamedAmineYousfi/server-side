import { User } from '../../user/entities/user.entity';
export declare class Coach {
    id: Number;
    coachName: string;
    rating: Number;
    price: Number;
    description: string;
    adress: string;
    adherent: User;
    phoneNumber: Number;
    email: string;
    imageUrl: string;
}
