import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from './entities/room.entity';
import { ScreeningEntity } from 'src/screenings/entities/screening.entity';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity, ScreeningEntity])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class OrdersModule {}