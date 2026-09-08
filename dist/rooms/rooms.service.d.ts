import { Repository } from 'typeorm';
import { RoomEntity } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomsService {
    private readonly roomsRepository;
    constructor(roomsRepository: Repository<RoomEntity>);
    create(createRoomDto: CreateRoomDto): Promise<RoomEntity>;
}
