import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
export declare class EventsService {
    private eventsRepository;
    constructor(eventsRepository: Repository<Event>);
    create(createEventDto: CreateEventDto): Promise<CreateEventDto & Event>;
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
