import { RoomEntity } from 'src/rooms/entities/room.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('screenings')
export class ScreeningEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 120 })
  movieTitle!: string;

  @CreateDateColumn({ name: 'starts_at' })
  startsAt!: Date;

  @Column({ type: 'varchar', length: 20, default: 'scheduled' })
  status!: 'scheduled' | 'cancelled';

  @ManyToOne(() => RoomEntity, (screening) => screening.rooms, {
    nullable: false,
  })
  @JoinColumn({ name: 'room_id' })
  screening!: ScreeningEntity;

  
}