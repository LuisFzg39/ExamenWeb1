import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomEntity } from './entities/room.entity';
import { ScreeningEntity } from 'src/screenings/entities/screening.entity';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomsRepository: Repository<RoomEntity>,

    @InjectRepository(ScreeningEntity)
    private readonly screeningsRepository: Repository<ScreeningEntity>,
  ) {}

  

}