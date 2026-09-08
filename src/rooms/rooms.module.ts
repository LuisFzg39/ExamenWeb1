import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from './entities/room.entity';
import { ScreeningEntity } from 'src/screenings/entities/screening.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity, ScreeningEntity])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}