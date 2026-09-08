import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomEntity } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {

  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomsRepository: Repository<RoomEntity>,

  ) {}

  async create(createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    const room = this.roomsRepository.create({
      name: createRoomDto.name,
      capacity: createRoomDto.capacity,
      
    });

    return this.roomsRepository.save(room);
  }

}