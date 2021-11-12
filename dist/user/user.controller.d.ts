import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable } from 'rxjs';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: CreateUserDto): Observable<any>;
    login(user: CreateUserDto, response: Response): void;
    findAll(): Observable<CreateUserDto[]>;
    findOne(id: string): Observable<{
        id: number;
        imageUrl: string;
        age: number;
        first_name: string;
        last_name: string;
        phone_number: number;
        email: string;
        registred_at: Date;
        coachs: import("../coachs/entities/coach.entity").Coach[];
        gyms: import("../gyms/entities/gym.entity").Gym[];
        events: import("../events/entities/event.entity").Event[];
        bmi: number;
        weight: number;
        height: number;
        adress: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): void;
    remove(id: string): Promise<void>;
}
